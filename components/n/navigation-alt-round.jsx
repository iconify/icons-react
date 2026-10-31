import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po1nvfbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po1nvfbdv"/>`,
		"fallback": "coolicons:navigation-alt-round",
	});
}

export default Component;
