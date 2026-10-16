import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei8_htdz.css';
import '../../css/h/him7vn2jl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei8_htdz"/><path class="him7vn2jl"/>`,
		"fallback": "energy-icons:marker-coal-20-bold",
	});
}

export default Component;
