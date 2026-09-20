import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9y04fb7u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9y04fb7u"/>`,
		"fallback": "zondicons:radar-copy-2",
	});
}

export default Component;
