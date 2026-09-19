import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq4qxab3e.css';

const viewBox = {"width":497,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq4qxab3e"/>`,
		"fallback": "file-icons:lark",
	});
}

export default Component;
