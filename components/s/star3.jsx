import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdo6hzbjf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdo6hzbjf"/>`,
		"fallback": "raphael:star3",
	});
}

export default Component;
