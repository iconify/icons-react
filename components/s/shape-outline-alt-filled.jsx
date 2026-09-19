import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osooifb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osooifb-b"/>`,
		"fallback": "boxicons:shape-outline-alt-filled",
	});
}

export default Component;
