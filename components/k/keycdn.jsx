import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p15-u2b9s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p15-u2b9s"/>`,
		"fallback": "cib:keycdn",
	});
}

export default Component;
