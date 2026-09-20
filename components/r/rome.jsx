import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f83g-5b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f83g-5b0d"/>`,
		"fallback": "simple-icons:rome",
	});
}

export default Component;
