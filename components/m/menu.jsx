import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gw3dw1bey.css';
import '../../css/w/w3onc6bpn.css';
import '../../css/a/aj77bgbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="gw3dw1bey"/><path class="w3onc6bpn"/><path class="aj77bgbhm"/></g>`,
		"fallback": "matita:menu",
	});
}

export default Component;
