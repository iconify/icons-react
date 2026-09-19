import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w79t2kb6p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w79t2kb6p"/>`,
		"fallback": "carbon:partition-same",
	});
}

export default Component;
