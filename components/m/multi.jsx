import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/u/u5k1s_b9x.css';
import '../../css/v/vt--2h7mc.css';
import '../../css/d/d5dwv_gti.css';
import '../../css/p/pnom3t5op.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><circle class="u5k1s_b9x"/><circle class="vt--2h7mc"/><circle class="d5dwv_gti"/><circle class="pnom3t5op"/></g>`,
		"fallback": "gala:multi",
	});
}

export default Component;
