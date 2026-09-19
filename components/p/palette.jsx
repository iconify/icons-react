import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvkcp-1dk.css';
import '../../css/d/d6t3z1bee.css';
import '../../css/k/kct-3dc3c.css';
import '../../css/h/h688dpbbc.css';
import '../../css/j/jdyq0k9_h.css';
import '../../css/e/elv445ljh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tvkcp-1dk"/><path class="d6t3z1bee"/><path class="kct-3dc3c"/><path class="h688dpbbc"/><path class="jdyq0k9_h"/><path class="elv445ljh"/></g>`,
		"fallback": "glyphs-poly:palette",
	});
}

export default Component;
