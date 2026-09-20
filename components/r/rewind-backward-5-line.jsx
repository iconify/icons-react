import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uar_8mb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uar_8mb5g"/>`,
		"fallback": "mingcute:rewind-backward-5-line",
	});
}

export default Component;
