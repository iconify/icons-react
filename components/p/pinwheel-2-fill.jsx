import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wih8tubvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wih8tubvq"/>`,
		"fallback": "mingcute:pinwheel-2-fill",
	});
}

export default Component;
