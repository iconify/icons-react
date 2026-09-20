import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xriey6b0n.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xriey6b0n"/>`,
		"fallback": "system-uicons:tag-milestone",
	});
}

export default Component;
