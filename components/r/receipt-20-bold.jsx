import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8_piicxj.css';
import '../../css/h/ht9oo05-f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8_piicxj"/><path class="ht9oo05-f"/>`,
		"fallback": "energy-icons:receipt-20-bold",
	});
}

export default Component;
