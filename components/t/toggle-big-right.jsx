import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvnle8ghx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvnle8ghx"/>`,
		"fallback": "boxicons:toggle-big-right",
	});
}

export default Component;
