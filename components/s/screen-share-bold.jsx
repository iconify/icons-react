import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxpbg7b-b.css';
import '../../css/k/k4l1xjb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kxpbg7b-b"/><path class="k4l1xjb4j"/>`,
		"fallback": "solar:screen-share-bold",
	});
}

export default Component;
