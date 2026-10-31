import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq1j11bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq1j11bcq"/>`,
		"fallback": "coolicons:piggy-bank-round",
	});
}

export default Component;
