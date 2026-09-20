import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2u0hlzai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2u0hlzai"/>`,
		"fallback": "mingcute:tunnel-fill",
	});
}

export default Component;
