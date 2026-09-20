import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai-1qvthx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai-1qvthx"/>`,
		"fallback": "pinhead:triangles-left-right-in-rectangle-outline",
	});
}

export default Component;
