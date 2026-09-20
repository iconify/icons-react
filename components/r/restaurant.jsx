import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td4qobc7z.css';
import '../../css/z/z3jcjnr1k.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td4qobc7z"/><path class="z3jcjnr1k"/>`,
		"fallback": "lineicons:restaurant",
	});
}

export default Component;
