import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyk8rpbfi.css';
import '../../css/e/esm6lcbck.css';
import '../../css/r/rl8odprdk.css';
import '../../css/v/vx7vdrusn.css';
import '../../css/m/m2qx7sbjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyk8rpbfi"/><path class="esm6lcbck"/><path class="rl8odprdk"/><path class="vx7vdrusn"/><path class="m2qx7sbjr"/>`,
		"fallback": "selfhst:microsoft-excel-dark",
	});
}

export default Component;
