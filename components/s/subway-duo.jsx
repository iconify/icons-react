import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vou3r2ifc.css';
import '../../css/j/joxafp8fj.css';
import '../../css/q/q7p9fvw2x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vou3r2ifc"/><path class="joxafp8fj"/><path class="q7p9fvw2x"/></g>`,
		"fallback": "glyphs:subway-duo",
	});
}

export default Component;
