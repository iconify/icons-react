import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt2_w2b_f.css';
import '../../css/e/etdoy3bgw.css';
import '../../css/g/gc-e6wn8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt2_w2b_f"/><path class="etdoy3bgw"/><path class="gc-e6wn8x"/>`,
		"fallback": "energy-icons:shrink-48-bold",
	});
}

export default Component;
