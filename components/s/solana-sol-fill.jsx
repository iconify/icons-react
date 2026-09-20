import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsbf2wbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wsbf2wbpg"/>`,
		"fallback": "mingcute:solana-sol-fill",
	});
}

export default Component;
