import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq31j6bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq31j6bst"/>`,
		"fallback": "mingcute:presentation-3-line",
	});
}

export default Component;
