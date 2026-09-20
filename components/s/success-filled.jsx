import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we959nb4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we959nb4i"/>`,
		"fallback": "ix:success-filled",
	});
}

export default Component;
