import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxjt1bbjd.css';
import '../../css/k/k_ivpjbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxjt1bbjd"/><path class="k_ivpjbpn"/>`,
		"fallback": "boxicons:pie-chart-alt-filled",
	});
}

export default Component;
