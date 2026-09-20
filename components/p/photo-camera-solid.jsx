import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb4lhrbmm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yb4lhrbmm"/>`,
		"fallback": "streamline-flex:photo-camera-solid",
	});
}

export default Component;
