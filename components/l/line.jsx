import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx1csacef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx1csacef"/>`,
		"fallback": "lets-icons:line",
	});
}

export default Component;
