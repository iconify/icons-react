import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klw64wbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klw64wbtg"/>`,
		"fallback": "mingcute:mail-ai-fill",
	});
}

export default Component;
