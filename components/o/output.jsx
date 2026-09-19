import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxdr6dbgy.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxdr6dbgy"/>`,
		"fallback": "codicon:output",
	});
}

export default Component;
