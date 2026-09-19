import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuxjtbc2x.css';

const viewBox = {"width":439,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuxjtbc2x"/>`,
		"fallback": "file-icons:prettier",
	});
}

export default Component;
