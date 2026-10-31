import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc_ljou1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc_ljou1u"/>`,
		"fallback": "coolicons:letter-g-bulk-round",
	});
}

export default Component;
