import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8mvcmb5j.css';

const viewBox = {"width":400,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8mvcmb5j"/>`,
		"fallback": "file-icons:ttcn-3",
	});
}

export default Component;
