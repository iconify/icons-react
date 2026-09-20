import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhyd0pb-g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhyd0pb-g"/>`,
		"fallback": "lineicons:twitter-fill",
	});
}

export default Component;
