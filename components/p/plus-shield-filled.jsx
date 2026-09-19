import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab1o5-0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xab1o5-0p"/>`,
		"fallback": "boxicons:plus-shield-filled",
	});
}

export default Component;
