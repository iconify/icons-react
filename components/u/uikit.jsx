import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv7qrfb2s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv7qrfb2s"/>`,
		"fallback": "cib:uikit",
	});
}

export default Component;
