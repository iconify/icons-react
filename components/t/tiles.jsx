import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njugq9ybx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njugq9ybx"/>`,
		"fallback": "fluent-mdl2:tiles",
	});
}

export default Component;
