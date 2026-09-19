import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z368c8k2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z368c8k2m"/>`,
		"fallback": "file-icons:io",
	});
}

export default Component;
