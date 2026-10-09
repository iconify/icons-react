import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0epiybna.css';
import '../../css/f/f_x7syode.css';
import '../../css/h/hacaudf9c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0epiybna"/><path class="f_x7syode"/><path class="hacaudf9c"/>`,
		"fallback": "energy-icons:virtual-power-plant-20-bold",
	});
}

export default Component;
