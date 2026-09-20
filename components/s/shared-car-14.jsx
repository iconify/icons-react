import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm08promo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm08promo"/>`,
		"fallback": "osmic:shared-car-14",
	});
}

export default Component;
