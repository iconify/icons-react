import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jzcx24byq.css';
import '../../css/w/wbtq8fbsk.css';
import '../../css/q/q4pymwbax.css';
import '../../css/i/ikvks8tal.css';
import '../../css/y/y_gs8ytdt.css';
import '../../css/p/pzdjkhb6f.css';
import '../../css/s/s9w2pbsjs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="jzcx24byq"/><path clip-rule="evenodd" class="wbtq8fbsk"/><path clip-rule="evenodd" class="q4pymwbax"/><rect class="ikvks8tal"/><rect class="y_gs8ytdt"/><path class="pzdjkhb6f"/><rect class="s9w2pbsjs"/></g>`,
		"fallback": "glyphs-poly:robot-head",
	});
}

export default Component;
