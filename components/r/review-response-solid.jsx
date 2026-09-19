import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hykr4xmaf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hykr4xmaf"/>`,
		"fallback": "fluent-mdl2:review-response-solid",
	});
}

export default Component;
