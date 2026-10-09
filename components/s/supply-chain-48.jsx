import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqe3gulqh.css';
import '../../css/q/qo5uhcrjj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqe3gulqh"/><path class="qo5uhcrjj"/>`,
		"fallback": "energy-icons:supply-chain-48",
	});
}

export default Component;
