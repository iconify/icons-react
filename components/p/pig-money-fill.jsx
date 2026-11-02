import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6qgtcb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6qgtcb1g"/>`,
		"fallback": "mingcute:pig-money-fill",
	});
}

export default Component;
