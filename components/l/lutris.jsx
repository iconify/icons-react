import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrq3cn4tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrq3cn4tp"/>`,
		"fallback": "simple-icons:lutris",
	});
}

export default Component;
