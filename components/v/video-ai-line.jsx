import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf1x_0b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf1x_0b3o"/>`,
		"fallback": "mingcute:video-ai-line",
	});
}

export default Component;
