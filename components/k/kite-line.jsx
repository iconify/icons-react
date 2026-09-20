import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he7n4hb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he7n4hb1w"/>`,
		"fallback": "mingcute:kite-line",
	});
}

export default Component;
