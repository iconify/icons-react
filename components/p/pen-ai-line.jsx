import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3pylg09r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3pylg09r"/>`,
		"fallback": "mingcute:pen-ai-line",
	});
}

export default Component;
