import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adme_kbdr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adme_kbdr"/>`,
		"fallback": "fa7-brands:pinterest-p",
	});
}

export default Component;
