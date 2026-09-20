import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngac032cr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ngac032cr"/>`,
		"fallback": "ix:split",
	});
}

export default Component;
