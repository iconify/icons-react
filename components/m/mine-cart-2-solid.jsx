import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuw4xv0mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vuw4xv0mp"/>`,
		"fallback": "streamline-sharp:mine-cart-2-solid",
	});
}

export default Component;
