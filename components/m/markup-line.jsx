import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4x38p0ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4x38p0ao"/>`,
		"fallback": "mingcute:markup-line",
	});
}

export default Component;
