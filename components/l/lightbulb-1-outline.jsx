import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hqijm0-xx.css';
import '../../css/p/p3yhwgb_q.css';
import '../../css/r/rfdm49bxm.css';
import '../../css/d/d3w2o5tno.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hqijm0-xx"/><path class="p3yhwgb_q"/><path clip-rule="evenodd" class="rfdm49bxm"/><path class="d3w2o5tno"/></g>`,
		"fallback": "glyphs:lightbulb-1-outline",
	});
}

export default Component;
