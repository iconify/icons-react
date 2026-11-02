import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6y9l9blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6y9l9blj"/>`,
		"fallback": "mingcute:solana-sol-fill",
	});
}

export default Component;
