import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs5wqyzfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs5wqyzfn"/>`,
		"fallback": "mingcute:user-search-line",
	});
}

export default Component;
