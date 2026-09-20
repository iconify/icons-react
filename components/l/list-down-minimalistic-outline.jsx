import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li-vivb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="li-vivb8o"/>`,
		"fallback": "solar:list-down-minimalistic-outline",
	});
}

export default Component;
