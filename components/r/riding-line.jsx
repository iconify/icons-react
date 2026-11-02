import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trqy23_xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trqy23_xq"/>`,
		"fallback": "mingcute:riding-line",
	});
}

export default Component;
