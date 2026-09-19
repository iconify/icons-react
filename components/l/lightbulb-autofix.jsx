import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vumcn1b2q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vumcn1b2q"/>`,
		"fallback": "codicon:lightbulb-autofix",
	});
}

export default Component;
