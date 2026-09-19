import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fl7ncac3m.css';
import '../../css/f/f8cw07bfb.css';
import '../../css/s/sgba66btq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fl7ncac3m"/><path class="f8cw07bfb"/><path clip-rule="evenodd" class="sgba66btq"/></g>`,
		"fallback": "glyphs-poly:stop-hand",
	});
}

export default Component;
