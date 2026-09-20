import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efxcg-bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efxcg-bdj"/>`,
		"fallback": "mingcute:pencil-3-ai-fill",
	});
}

export default Component;
