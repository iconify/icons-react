import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e75o2bcvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e75o2bcvi"/>`,
		"fallback": "mingcute:laurel-wreath-fill",
	});
}

export default Component;
