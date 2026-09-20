import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmmvh1b-y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmmvh1b-y"/>`,
		"fallback": "streamline-block:programming-browser",
	});
}

export default Component;
