import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhk2u_byh.css';
import '../../css/l/l6j-txiai.css';
import '../../css/w/w6sns4blb.css';
import '../../css/b/bht8vx5nu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhk2u_byh"/><path class="l6j-txiai"/><path class="w6sns4blb"/><path class="bht8vx5nu"/>`,
		"fallback": "energy-icons:pressure-gauge-48",
	});
}

export default Component;
