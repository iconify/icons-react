import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moujm4bxk.css';
import '../../css/y/yoimegbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moujm4bxk"/><path class="yoimegbqj"/>`,
		"fallback": "boxicons:location",
	});
}

export default Component;
