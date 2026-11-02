import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj7aiv6ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj7aiv6ea"/>`,
		"fallback": "mingcute:taj-mahal-line",
	});
}

export default Component;
