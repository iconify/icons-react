import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8kbu62ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8kbu62ly"/>`,
		"fallback": "streamline-sharp:shopping-cart-add-remix",
	});
}

export default Component;
