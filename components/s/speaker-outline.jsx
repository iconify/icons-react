import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ezn9tccvl.css';
import '../../css/y/y3q1vrbgr.css';
import '../../css/t/tqjl8kbws.css';
import '../../css/o/o1w_a7bsq.css';
import '../../css/u/uh460ybdf.css';
import '../../css/v/vezcezvfx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ezn9tccvl"/><path class="y3q1vrbgr"/><path class="tqjl8kbws"/><path class="o1w_a7bsq"/><path class="uh460ybdf"/><path class="vezcezvfx"/></g>`,
		"fallback": "glyphs:speaker-outline",
	});
}

export default Component;
