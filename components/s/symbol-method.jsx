import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe4t69j8n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe4t69j8n"/>`,
		"fallback": "codicon:symbol-method",
	});
}

export default Component;
