import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jijaykbcd.css';
import '../../css/u/uylaeij1i.css';
import '../../css/y/y1e_v1sal.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jijaykbcd"/><path class="uylaeij1i"/><path class="y1e_v1sal"/>`,
		"fallback": "energy-icons:text-cursor-20-bold",
	});
}

export default Component;
