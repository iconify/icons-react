import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0i2p1bpi.css';
import '../../css/y/y0hffi4py.css';
import '../../css/z/zafs9vb2h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0i2p1bpi"/><path class="y0hffi4py"/><path class="zafs9vb2h"/>`,
		"fallback": "energy-icons:milk-carton-20-bold",
	});
}

export default Component;
