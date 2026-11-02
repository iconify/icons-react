import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnt5xlejy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnt5xlejy"/>`,
		"fallback": "mingcute:wallet-2-line",
	});
}

export default Component;
