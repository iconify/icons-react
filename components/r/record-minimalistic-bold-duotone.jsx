import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3x_ug_ff.css';
import '../../css/t/tb35ynitm.css';
import '../../css/e/edwd7ibhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3x_ug_ff"/><path class="tb35ynitm"/><path class="edwd7ibhc"/>`,
		"fallback": "solar:record-minimalistic-bold-duotone",
	});
}

export default Component;
