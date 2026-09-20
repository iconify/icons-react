import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz0560box.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz0560box"/>`,
		"fallback": "quill:text-right",
	});
}

export default Component;
