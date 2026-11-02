import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhdmssnnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhdmssnnf"/>`,
		"fallback": "mingcute:message-4-ai-fill",
	});
}

export default Component;
