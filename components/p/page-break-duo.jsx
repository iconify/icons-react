import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8xajdb2x.css';
import '../../css/u/uj5gecbfk.css';
import '../../css/i/izq5rqmyv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8xajdb2x"/><path class="uj5gecbfk"/><path class="izq5rqmyv"/></g>`,
		"fallback": "glyphs:page-break-duo",
	});
}

export default Component;
