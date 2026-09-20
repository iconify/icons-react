import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc935yb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc935yb7v"/>`,
		"fallback": "keyline-icons:message-square-minus",
	});
}

export default Component;
