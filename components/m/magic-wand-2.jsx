import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x3qjg1bjo.css';
import '../../css/f/f5-pnib6a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x3qjg1bjo"/><path class="f5-pnib6a"/></g>`,
		"fallback": "streamline-color:magic-wand-2",
	});
}

export default Component;
