import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pby5r5c2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pby5r5c2n"/>`,
		"fallback": "mingcute:settings-2-line",
	});
}

export default Component;
