import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6fglob2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6fglob2n"/>`,
		"fallback": "tabler:transaction-rupee",
	});
}

export default Component;
