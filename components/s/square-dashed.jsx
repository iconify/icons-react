import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiz190byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiz190byb"/>`,
		"fallback": "hugeicons:square-dashed",
	});
}

export default Component;
