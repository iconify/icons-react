import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deeui2chz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="deeui2chz"/>`,
		"fallback": "streamline-sharp:mine-cart-2-remix",
	});
}

export default Component;
