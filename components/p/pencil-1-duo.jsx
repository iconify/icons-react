import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilt41gdzy.css';
import '../../css/h/ho8201-pa.css';
import '../../css/f/flrxrstck.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ilt41gdzy"/><path class="ho8201-pa"/><path class="flrxrstck"/></g>`,
		"fallback": "glyphs:pencil-1-duo",
	});
}

export default Component;
