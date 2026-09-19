import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp471zbxk.css';
import '../../css/z/z53wpybvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp471zbxk"/><path class="z53wpybvy"/>`,
		"fallback": "boxicons:virus",
	});
}

export default Component;
