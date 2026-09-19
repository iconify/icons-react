import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm-aslyrz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-aslyrz"/>`,
		"fallback": "file-icons:manjaro",
	});
}

export default Component;
