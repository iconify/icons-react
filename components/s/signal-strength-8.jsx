import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goppj6bth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goppj6bth"/>`,
		"fallback": "ix:signal-strength-8",
	});
}

export default Component;
