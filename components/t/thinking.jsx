import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo0nwpb6e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo0nwpb6e"/>`,
		"fallback": "codicon:thinking",
	});
}

export default Component;
