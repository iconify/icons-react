import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz47nnzel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz47nnzel"/>`,
		"fallback": "mingcute:notebook-line",
	});
}

export default Component;
