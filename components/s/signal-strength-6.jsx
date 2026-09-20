import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3rhadh4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3rhadh4k"/>`,
		"fallback": "ix:signal-strength-6",
	});
}

export default Component;
