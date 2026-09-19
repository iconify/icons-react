import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9h1ahwix.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9h1ahwix"/>`,
		"fallback": "fa7-solid:left-right",
	});
}

export default Component;
