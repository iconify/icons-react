import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j6_9ezbtb.css';
import '../../css/w/w3lsaijhs.css';
import '../../css/l/lbdagjb_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j6_9ezbtb"/><path class="w3lsaijhs"/><path class="lbdagjb_m"/></g>`,
		"fallback": "streamline:square-clock",
	});
}

export default Component;
