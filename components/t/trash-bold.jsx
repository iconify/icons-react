import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8naxbc7h.css';
import '../../css/m/mh00jacot.css';
import '../../css/t/tc_5umbee.css';
import '../../css/u/u2-wo9b_m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v8naxbc7h"/><path class="mh00jacot"/><path class="tc_5umbee"/><path class="u2-wo9b_m"/></g>`,
		"fallback": "glyphs:trash-bold",
	});
}

export default Component;
