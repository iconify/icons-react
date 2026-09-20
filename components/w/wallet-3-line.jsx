import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_gnn0bpn.css';
import '../../css/z/zq43phuqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_gnn0bpn"/><path class="zq43phuqr"/>`,
		"fallback": "mingcute:wallet-3-line",
	});
}

export default Component;
