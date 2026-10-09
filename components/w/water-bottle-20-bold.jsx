import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9nf_fbqv.css';
import '../../css/r/rn7_tzbji.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9nf_fbqv"/><path class="rn7_tzbji"/>`,
		"fallback": "energy-icons:water-bottle-20-bold",
	});
}

export default Component;
