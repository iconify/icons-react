import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xax07rbgn.css';
import '../../css/q/q-4sndczh.css';
import '../../css/a/aluo5vbsb.css';
import '../../css/i/iq1f_7bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xax07rbgn"/><path class="q-4sndczh"/><path class="aluo5vbsb"/><path class="iq1f_7bns"/></g>`,
		"fallback": "keyline-icons:refresh-cw-sparkles-sharp-two-tone",
	});
}

export default Component;
