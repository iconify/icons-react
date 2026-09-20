import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5h-4ccku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5h-4ccku"/>`,
		"fallback": "mingcute:seat-fill",
	});
}

export default Component;
