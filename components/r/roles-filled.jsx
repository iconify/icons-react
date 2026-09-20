import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqxp03brl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lqxp03brl"/>`,
		"fallback": "ix:roles-filled",
	});
}

export default Component;
