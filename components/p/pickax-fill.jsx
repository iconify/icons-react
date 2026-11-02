import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb34y8b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb34y8b3k"/>`,
		"fallback": "mingcute:pickax-fill",
	});
}

export default Component;
