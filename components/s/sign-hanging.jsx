import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acd90xb3m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acd90xb3m"/>`,
		"fallback": "fa7-solid:sign-hanging",
	});
}

export default Component;
