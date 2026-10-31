import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rha5-6c-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rha5-6c-d"/>`,
		"fallback": "coolicons:menu-alt-5-bulk-round",
	});
}

export default Component;
