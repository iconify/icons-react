import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/brwuu3bob.css';
import '../../css/f/fhwl3ee0w.css';
import '../../css/q/q1bjnfb8r.css';
import '../../css/v/v9sc_5nqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="brwuu3bob"/><path class="fhwl3ee0w"/><path class="q1bjnfb8r"/><path class="v9sc_5nqm"/></g>`,
		"fallback": "hugeicons:qr-code",
	});
}

export default Component;
