import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qa3q44xuv.css';
import '../../css/u/u_nwqzbhk.css';
import '../../css/q/q9pr91bjz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qa3q44xuv"/><path class="u_nwqzbhk"/><path clip-rule="evenodd" class="q9pr91bjz"/></g>`,
		"fallback": "glyphs-poly:pen-fountain",
	});
}

export default Component;
