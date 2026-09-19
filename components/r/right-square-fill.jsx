import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8-fn9hwo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8-fn9hwo"/>`,
		"fallback": "ant-design:right-square-fill",
	});
}

export default Component;
