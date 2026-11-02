import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epeg40bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epeg40bnq"/>`,
		"fallback": "mingcute:terminal-ai-fill",
	});
}

export default Component;
