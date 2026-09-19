import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se_do7boi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se_do7boi"/>`,
		"fallback": "fa7-solid:people-robbery",
	});
}

export default Component;
