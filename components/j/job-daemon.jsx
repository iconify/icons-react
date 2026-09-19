import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wewar8boz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wewar8boz"/>`,
		"fallback": "carbon:job-daemon",
	});
}

export default Component;
