import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugu7h1-mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugu7h1-mz"/>`,
		"fallback": "mingcute:unlink-fill",
	});
}

export default Component;
