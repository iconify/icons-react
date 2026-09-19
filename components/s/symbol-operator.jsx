import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw2a3ibob.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw2a3ibob"/>`,
		"fallback": "codicon:symbol-operator",
	});
}

export default Component;
