import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu2bs-teb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu2bs-teb"/>`,
		"fallback": "fa6-solid:mask-ventilator",
	});
}

export default Component;
