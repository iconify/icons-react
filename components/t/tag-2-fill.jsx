import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnzc5o18j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnzc5o18j"/>`,
		"fallback": "mingcute:tag-2-fill",
	});
}

export default Component;
