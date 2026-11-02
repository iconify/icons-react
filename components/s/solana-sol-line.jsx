import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_tp76blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_tp76blh"/>`,
		"fallback": "mingcute:solana-sol-line",
	});
}

export default Component;
