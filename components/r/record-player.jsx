import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xnwd84b_l.css';
import '../../css/h/hbdex-oic.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xnwd84b_l"/><path class="hbdex-oic"/></g>`,
		"fallback": "streamline-flex:record-player",
	});
}

export default Component;
