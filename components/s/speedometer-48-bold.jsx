import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thh11x-om.css';
import '../../css/p/pd3wy4zwc.css';
import '../../css/n/nf3olcpnj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thh11x-om"/><path class="pd3wy4zwc"/><path class="nf3olcpnj"/>`,
		"fallback": "energy-icons:speedometer-48-bold",
	});
}

export default Component;
