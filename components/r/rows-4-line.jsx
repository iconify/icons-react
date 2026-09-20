import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfu70ff8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfu70ff8c"/>`,
		"fallback": "mingcute:rows-4-line",
	});
}

export default Component;
