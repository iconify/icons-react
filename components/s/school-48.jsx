import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu_-hqblm.css';
import '../../css/l/lx1bjzy7s.css';
import '../../css/r/rkhp_zb5l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu_-hqblm"/><path class="lx1bjzy7s"/><path class="rkhp_zb5l"/>`,
		"fallback": "energy-icons:school-48",
	});
}

export default Component;
