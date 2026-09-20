import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thaxyb7jf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thaxyb7jf"/>`,
		"fallback": "ix:pc-tower-filled",
	});
}

export default Component;
