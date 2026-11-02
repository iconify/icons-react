import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usgq78dhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usgq78dhq"/>`,
		"fallback": "mingcute:vest-fill",
	});
}

export default Component;
