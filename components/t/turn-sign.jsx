import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezy7dxiok.css';
import '../../css/o/o_rzsi0tj.css';
import '../../css/j/jxz1lf3mf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 39.94 6)" class="ezy7dxiok"/><path class="o_rzsi0tj"/><path class="jxz1lf3mf"/></g>`,
		"fallback": "glyphs-poly:turn-sign",
	});
}

export default Component;
