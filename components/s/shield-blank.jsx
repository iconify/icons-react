import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4v5g3bmo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4v5g3bmo"/>`,
		"fallback": "fa7-solid:shield-blank",
	});
}

export default Component;
