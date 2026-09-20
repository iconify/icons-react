import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np8zppb2s.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np8zppb2s"/>`,
		"fallback": "system-uicons:volume-add",
	});
}

export default Component;
