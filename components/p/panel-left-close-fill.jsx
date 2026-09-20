import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uarib6_cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uarib6_cc"/>`,
		"fallback": "keyline-icons:panel-left-close-fill",
	});
}

export default Component;
