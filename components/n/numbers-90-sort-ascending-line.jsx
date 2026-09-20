import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxm94bcqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxm94bcqe"/>`,
		"fallback": "mingcute:numbers-90-sort-ascending-line",
	});
}

export default Component;
