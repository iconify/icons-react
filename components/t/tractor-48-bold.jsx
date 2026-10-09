import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfao_6b1t.css';
import '../../css/q/qepjo_bej.css';
import '../../css/t/t9qz5obke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfao_6b1t"/><path class="qepjo_bej"/><path class="t9qz5obke"/>`,
		"fallback": "energy-icons:tractor-48-bold",
	});
}

export default Component;
