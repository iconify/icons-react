import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alvduwk6p.css';
import '../../css/g/g7x2tg8pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alvduwk6p"/><path class="g7x2tg8pa"/>`,
		"fallback": "token:soroswap",
	});
}

export default Component;
