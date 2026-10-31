import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2xtnil3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2xtnil3l"/>`,
		"fallback": "coolicons:menu-double-large-bulk-round",
	});
}

export default Component;
