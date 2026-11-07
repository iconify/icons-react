import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3dfu3brp.css';
import '../../css/q/qfj7523-i.css';
import '../../css/h/h_vbtsb7e.css';
import '../../css/x/xy6mmpbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3dfu3brp"/><path class="qfj7523-i"/><path class="h_vbtsb7e"/><path class="xy6mmpbpv"/>`,
		"fallback": "solar:smart-home-angle-outline",
	});
}

export default Component;
