import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjfhw3bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjfhw3bvk"/>`,
		"fallback": "mingcute:terminal-box-ai-fill",
	});
}

export default Component;
