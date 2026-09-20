import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buu_4mbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buu_4mbhb"/>`,
		"fallback": "mingcute:rose-line",
	});
}

export default Component;
