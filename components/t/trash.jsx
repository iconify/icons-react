import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qx9a5vb2t.css';
import '../../css/m/mbdj0e04q.css';
import '../../css/j/jqrvh3_gi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qx9a5vb2t"/><path class="mbdj0e04q"/><path class="jqrvh3_gi"/></g>`,
		"fallback": "glyphs-poly:trash",
	});
}

export default Component;
