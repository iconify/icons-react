import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcx4prbjl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcx4prbjl"/>`,
		"fallback": "carbon:logo-linkedin",
	});
}

export default Component;
