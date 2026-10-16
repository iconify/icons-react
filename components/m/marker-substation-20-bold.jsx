import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei8_htdz.css';
import '../../css/m/m805q3b9o.css';
import '../../css/b/bhaor6bnd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei8_htdz"/><path class="m805q3b9o"/><path class="bhaor6bnd"/>`,
		"fallback": "energy-icons:marker-substation-20-bold",
	});
}

export default Component;
