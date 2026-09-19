import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp8g4kbjc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp8g4kbjc"/>`,
		"fallback": "cib:java",
	});
}

export default Component;
