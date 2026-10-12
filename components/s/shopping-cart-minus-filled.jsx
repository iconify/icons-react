import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pud5wbbsm.css';
import '../../css/p/pz991cbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pud5wbbsm"/><path class="pz991cbha"/>`,
		"fallback": "lucide-extended:shopping-cart-minus-filled",
	});
}

export default Component;
