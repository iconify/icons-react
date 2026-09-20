import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xazcw1buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xazcw1buf"/>`,
		"fallback": "simple-icons:onnx",
	});
}

export default Component;
