import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsy-cw1ys.css';
import '../../css/o/o338q5bim.css';
import '../../css/k/k_q3cjb9q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsy-cw1ys"/><path class="o338q5bim"/><path class="k_q3cjb9q"/>`,
		"fallback": "energy-icons:text-size-20-bold",
	});
}

export default Component;
