import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1b2s3b7v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1b2s3b7v"/>`,
		"fallback": "ooui:italic-arab-meem",
	});
}

export default Component;
