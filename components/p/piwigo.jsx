import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytc8hsbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytc8hsbew"/>`,
		"fallback": "simple-icons:piwigo",
	});
}

export default Component;
