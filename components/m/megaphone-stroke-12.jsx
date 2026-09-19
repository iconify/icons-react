import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3-abubmf.css';
import '../../css/j/j9m0dh2uz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3-abubmf"/><path class="j9m0dh2uz"/>`,
		"fallback": "garden:megaphone-stroke-12",
	});
}

export default Component;
