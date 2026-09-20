import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jverfxb2o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jverfxb2o"/>`,
		"fallback": "uiw:video-camera",
	});
}

export default Component;
