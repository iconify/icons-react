import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_1htfp2k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_1htfp2k"/>`,
		"fallback": "quill:send-stop",
	});
}

export default Component;
