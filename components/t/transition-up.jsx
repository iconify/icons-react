import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eg5pxxbut.css';
import '../../css/a/any3dja6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eg5pxxbut"/><path class="any3dja6v"/></g>`,
		"fallback": "iconoir:transition-up",
	});
}

export default Component;
