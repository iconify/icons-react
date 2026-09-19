import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqhd8xb9b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqhd8xb9b"/>`,
		"fallback": "fluent-mdl2:open-with",
	});
}

export default Component;
