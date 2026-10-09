import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-wsinb4h.css';
import '../../css/p/pqv-_6b_b.css';
import '../../css/z/zv1y48bco.css';
import '../../css/r/r2a2075fm.css';
import '../../css/a/a8v1ihj3j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-wsinb4h"/><path class="pqv-_6b_b"/><path class="zv1y48bco"/><path class="r2a2075fm"/><path class="a8v1ihj3j"/>`,
		"fallback": "energy-icons:solar-irradiance-20-bold",
	});
}

export default Component;
