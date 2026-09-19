import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj7g8cc7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj7g8cc7x"/>`,
		"fallback": "file-icons:khronos",
	});
}

export default Component;
