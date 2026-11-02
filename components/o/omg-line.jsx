import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odxs2qbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odxs2qbmd"/>`,
		"fallback": "mingcute:omg-line",
	});
}

export default Component;
