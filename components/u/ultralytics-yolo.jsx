import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wngs4vr5n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wngs4vr5n"/>`,
		"fallback": "fa7-brands:ultralytics-yolo",
	});
}

export default Component;
