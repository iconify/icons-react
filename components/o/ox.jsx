import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e24zqdb6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e24zqdb6o"/>`,
		"fallback": "file-icons:ox",
	});
}

export default Component;
