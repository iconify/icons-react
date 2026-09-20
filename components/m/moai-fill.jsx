import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i64rjbc9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i64rjbc9j"/>`,
		"fallback": "mingcute:moai-fill",
	});
}

export default Component;
