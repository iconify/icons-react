import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm782obmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm782obmf"/>`,
		"fallback": "mingcute:rewind-forward-30-line",
	});
}

export default Component;
