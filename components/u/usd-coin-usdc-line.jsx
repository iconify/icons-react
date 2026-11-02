import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6wt9tb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6wt9tb1j"/>`,
		"fallback": "mingcute:usd-coin-usdc-line",
	});
}

export default Component;
