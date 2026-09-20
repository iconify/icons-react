import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx61w1b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx61w1b0y"/>`,
		"fallback": "mingcute:leaf-line",
	});
}

export default Component;
