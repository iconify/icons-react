import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab4ppporb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab4ppporb"/>`,
		"fallback": "boxicons:lock-keyhole-open",
	});
}

export default Component;
