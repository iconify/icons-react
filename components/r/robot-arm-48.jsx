import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp589yb-g.css';
import '../../css/e/esg1j5bfl.css';
import '../../css/i/ixcfylb1s.css';
import '../../css/d/d8tx-pb_g.css';
import '../../css/q/qndg8fbip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp589yb-g"/><path class="esg1j5bfl"/><path class="ixcfylb1s"/><path class="d8tx-pb_g"/><path class="qndg8fbip"/>`,
		"fallback": "energy-icons:robot-arm-48",
	});
}

export default Component;
