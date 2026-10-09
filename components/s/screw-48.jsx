import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnk74hkus.css';
import '../../css/k/kwnsnzbar.css';
import '../../css/k/k5ji0xe4i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnk74hkus"/><path class="kwnsnzbar"/><path class="k5ji0xe4i"/>`,
		"fallback": "energy-icons:screw-48",
	});
}

export default Component;
