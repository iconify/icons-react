import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ur4uqmbtb.css';
import '../../css/d/d3gb1uvps.css';
import '../../css/i/i4o9y09nw.css';
import '../../css/s/sranjbbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ur4uqmbtb"/><path class="d3gb1uvps"/><path clip-rule="evenodd" class="i4o9y09nw"/><path class="sranjbbfr"/></g>`,
		"fallback": "nrk:smart-speaker-expressive",
	});
}

export default Component;
