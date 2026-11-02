import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg2irbcwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg2irbcwr"/>`,
		"fallback": "mingcute:rewind-forward-10-fill",
	});
}

export default Component;
