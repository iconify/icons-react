import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9bt45sko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9bt45sko"/>`,
		"fallback": "mingcute:mail-line",
	});
}

export default Component;
