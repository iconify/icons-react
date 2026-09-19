import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zycd0oq2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zycd0oq2e"/>`,
		"fallback": "carbon:representation-textual",
	});
}

export default Component;
