import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbhk_r89i.css';
import '../../css/l/l4lrodbjn.css';
import '../../css/z/zksetoblz.css';
import '../../css/i/ir3gzs0nv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbhk_r89i"/><path class="l4lrodbjn"/><path class="zksetoblz"/><path class="ir3gzs0nv"/>`,
		"fallback": "energy-icons:pizza-oven-48",
	});
}

export default Component;
