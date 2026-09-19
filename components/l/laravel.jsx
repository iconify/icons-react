import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzc_ihq3o.css';

const viewBox = {"width":498,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzc_ihq3o"/>`,
		"fallback": "file-icons:laravel",
	});
}

export default Component;
