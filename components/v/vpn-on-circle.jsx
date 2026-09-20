import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hlvk25bpn.css';
import '../../css/j/jiodww5ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hlvk25bpn"/><path class="jiodww5ig"/></g>`,
		"fallback": "streamline-ultimate:vpn-on-circle",
	});
}

export default Component;
