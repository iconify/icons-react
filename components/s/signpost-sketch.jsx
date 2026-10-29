import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i_1xs8ezl.css';
import '../../css/j/jcugpbcrt.css';
import '../../css/e/erfo6-egg.css';
import '../../css/p/psaadlbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i_1xs8ezl"/><path class="jcugpbcrt wm-k"/><path class="erfo6-egg wm-k"/><path class="psaadlbfa wm-a"/></g>`,
		"fallback": "withicons:signpost-sketch",
	});
}

export default Component;
