import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txhr-1syo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txhr-1syo"/>`,
		"fallback": "devicon-plain:sublimetext",
	});
}

export default Component;
