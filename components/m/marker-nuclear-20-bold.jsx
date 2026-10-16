import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei8_htdz.css';
import '../../css/r/ryog7pbwy.css';
import '../../css/n/nnxkvbcoh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei8_htdz"/><path class="ryog7pbwy"/><path class="nnxkvbcoh"/>`,
		"fallback": "energy-icons:marker-nuclear-20-bold",
	});
}

export default Component;
