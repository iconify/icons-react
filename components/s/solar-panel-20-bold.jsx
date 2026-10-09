import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs1iioq3v.css';
import '../../css/u/ujdtqrbjr.css';
import '../../css/t/t5fnm26xn.css';
import '../../css/d/d2qyootpq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs1iioq3v"/><path class="ujdtqrbjr"/><path class="t5fnm26xn"/><path class="d2qyootpq"/>`,
		"fallback": "energy-icons:solar-panel-20-bold",
	});
}

export default Component;
