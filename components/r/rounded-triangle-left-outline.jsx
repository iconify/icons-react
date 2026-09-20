import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcyejvb8r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcyejvb8r"/>`,
		"fallback": "pinhead:rounded-triangle-left-outline",
	});
}

export default Component;
