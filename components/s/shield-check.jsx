import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_e1699uz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_e1699uz"/>`,
		"fallback": "ix:shield-check",
	});
}

export default Component;
