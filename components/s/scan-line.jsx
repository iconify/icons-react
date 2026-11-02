import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr6tnccry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr6tnccry"/>`,
		"fallback": "mingcute:scan-line",
	});
}

export default Component;
