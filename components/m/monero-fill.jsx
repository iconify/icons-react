import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfa8f7bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfa8f7bnk"/>`,
		"fallback": "mingcute:monero-fill",
	});
}

export default Component;
