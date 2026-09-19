import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki8vug_cd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki8vug_cd"/>`,
		"fallback": "cib:python",
	});
}

export default Component;
