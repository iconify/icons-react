import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uovd8rbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uovd8rbvq"/>`,
		"fallback": "mingcute:mountain-fill",
	});
}

export default Component;
