import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbm3ckrdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zbm3ckrdg"/>`,
		"fallback": "solar:ticket-star-bold",
	});
}

export default Component;
