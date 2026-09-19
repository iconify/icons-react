import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxmn-r4xl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxmn-r4xl"/>`,
		"fallback": "carbon:page-first",
	});
}

export default Component;
