import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7zll976v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7zll976v"/>`,
		"fallback": "zondicons:view-column",
	});
}

export default Component;
