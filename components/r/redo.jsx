import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnzfu0s5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnzfu0s5t"/>`,
		"fallback": "uit:redo",
	});
}

export default Component;
