import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfxg8vb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lfxg8vb2i"/>`,
		"fallback": "mingcute:toggle-right-fill",
	});
}

export default Component;
