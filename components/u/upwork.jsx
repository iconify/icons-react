import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4mm9rbpt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4mm9rbpt"/>`,
		"fallback": "fa7-brands:upwork",
	});
}

export default Component;
