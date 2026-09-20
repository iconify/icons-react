import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp1zz_b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp1zz_b8k"/>`,
		"fallback": "mingcute:solana-sol-line",
	});
}

export default Component;
