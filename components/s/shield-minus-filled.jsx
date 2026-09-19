import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb3r7vl8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb3r7vl8v"/>`,
		"fallback": "griddy-icons:shield-minus-filled",
	});
}

export default Component;
