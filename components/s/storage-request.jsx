import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d67a6723k.css';
import '../../css/q/qa-1pv6bo.css';
import '../../css/i/ir_7aj3dy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d67a6723k"/><circle class="qa-1pv6bo"/><circle class="ir_7aj3dy"/>`,
		"fallback": "carbon:storage-request",
	});
}

export default Component;
