import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehe9dmo0u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehe9dmo0u"/>`,
		"fallback": "fa7-solid:rocket",
	});
}

export default Component;
