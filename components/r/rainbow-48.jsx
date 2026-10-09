import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpwbxtx3s.css';
import '../../css/t/t_784wbmv.css';
import '../../css/w/wnrp6nv_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpwbxtx3s"/><path class="t_784wbmv"/><path class="wnrp6nv_g"/>`,
		"fallback": "energy-icons:rainbow-48",
	});
}

export default Component;
