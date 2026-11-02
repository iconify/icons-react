import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xye12b3il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xye12b3il"/>`,
		"fallback": "mingcute:table-line",
	});
}

export default Component;
