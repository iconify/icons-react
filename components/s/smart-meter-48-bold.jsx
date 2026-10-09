import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvxin6bpa.css';
import '../../css/q/qvo2fwbpx.css';
import '../../css/i/ipvmyugcg.css';
import '../../css/l/lvh1_3beu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvxin6bpa"/><path class="qvo2fwbpx"/><path class="ipvmyugcg"/><path class="lvh1_3beu"/>`,
		"fallback": "energy-icons:smart-meter-48-bold",
	});
}

export default Component;
