import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxdr3cc4r.css';

const viewBox = {"width":224,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxdr3cc4r"/>`,
		"fallback": "ps:next",
	});
}

export default Component;
