import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl2f5u--n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl2f5u--n"/>`,
		"fallback": "mingcute:sale-line",
	});
}

export default Component;
