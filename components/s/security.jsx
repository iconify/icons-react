import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5t1omb0s.css';
import '../../css/e/ey3vbs2kb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5t1omb0s"/><path class="ey3vbs2kb"/>`,
		"fallback": "carbon:security",
	});
}

export default Component;
