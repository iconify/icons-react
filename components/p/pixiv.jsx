import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4n378bkl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4n378bkl"/>`,
		"fallback": "fa7-brands:pixiv",
	});
}

export default Component;
