import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cehi_ab5l.css';
import '../../css/l/lp3-t_bhn.css';
import '../../css/p/phjpdo02s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cehi_ab5l"/><path class="lp3-t_bhn"/><path class="phjpdo02s"/>`,
		"fallback": "energy-icons:strategy-48",
	});
}

export default Component;
