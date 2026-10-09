import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obu46ub-t.css';
import '../../css/k/kzkq8kbod.css';
import '../../css/b/bzo0k_whu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obu46ub-t"/><path class="kzkq8kbod"/><path class="bzo0k_whu"/>`,
		"fallback": "energy-icons:solar-panel-bolt-20-bold",
	});
}

export default Component;
