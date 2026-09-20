import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egr5g34zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egr5g34zn"/>`,
		"fallback": "mingcute:save-2-fill",
	});
}

export default Component;
