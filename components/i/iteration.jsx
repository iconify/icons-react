import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k907nmvkj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k907nmvkj"/>`,
		"fallback": "pajamas:iteration",
	});
}

export default Component;
