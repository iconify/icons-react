import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eejcbcpnz.css';
import '../../css/h/hd550qe5v.css';
import '../../css/y/y9os12cwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="eejcbcpnz wm-deco"/><path class="hd550qe5v wm-k"/><path class="wm-a y9os12cwo"/></g>`,
		"fallback": "withicons:rose-bouquet-blueprint",
	});
}

export default Component;
