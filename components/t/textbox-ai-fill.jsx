import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/likc0vc3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="likc0vc3f"/>`,
		"fallback": "mingcute:textbox-ai-fill",
	});
}

export default Component;
