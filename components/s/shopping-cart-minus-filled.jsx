import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pud5wbbsm.css';
import '../../css/p/ppmoggy1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pud5wbbsm"/><path class="ppmoggy1t"/>`,
		"fallback": "lucide-extended:shopping-cart-minus-filled",
	});
}

export default Component;
