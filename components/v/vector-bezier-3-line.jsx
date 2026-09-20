import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb6qywzxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb6qywzxu"/>`,
		"fallback": "mingcute:vector-bezier-3-line",
	});
}

export default Component;
