import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e75f81i5r.css';

const viewBox = {"width":479,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e75f81i5r"/>`,
		"fallback": "file-icons:progress",
	});
}

export default Component;
