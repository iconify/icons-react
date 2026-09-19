import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j76p0in1i.css';
import '../../css/t/ttc468btu.css';
import '../../css/u/uii4avzkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j76p0in1i"/><circle class="ttc468btu"/><circle class="uii4avzkv"/>`,
		"fallback": "eva:shopping-cart-outline",
	});
}

export default Component;
