import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu3xopu2a.css';
import '../../css/k/kbs2nvbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu3xopu2a"/><path class="kbs2nvbgh"/>`,
		"fallback": "bxs:washer",
	});
}

export default Component;
