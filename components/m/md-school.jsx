import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtyhg7ndl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtyhg7ndl"/>`,
		"fallback": "ion:md-school",
	});
}

export default Component;
