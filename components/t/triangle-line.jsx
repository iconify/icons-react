import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdi1o_bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdi1o_bxn"/>`,
		"fallback": "mingcute:triangle-line",
	});
}

export default Component;
