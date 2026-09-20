import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnn7-0g9o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnn7-0g9o"/>`,
		"fallback": "quill:userhappy",
	});
}

export default Component;
