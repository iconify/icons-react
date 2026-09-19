import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svy-d9glg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svy-d9glg"/>`,
		"fallback": "ci:shopping-cart-02",
	});
}

export default Component;
