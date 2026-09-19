import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax4xf9blr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax4xf9blr"/>`,
		"fallback": "ion:ios-undo-outline",
	});
}

export default Component;
