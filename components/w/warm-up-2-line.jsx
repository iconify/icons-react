import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5rgnrbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5rgnrbzu"/>`,
		"fallback": "mingcute:warm-up-2-line",
	});
}

export default Component;
