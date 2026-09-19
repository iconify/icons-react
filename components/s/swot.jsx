import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyodnjj0k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyodnjj0k"/>`,
		"fallback": "carbon:swot",
	});
}

export default Component;
