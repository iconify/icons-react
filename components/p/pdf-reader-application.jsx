import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxg5-fbor.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxg5-fbor"/>`,
		"fallback": "streamline-flex-color:pdf-reader-application",
	});
}

export default Component;
