import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq1njibny.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq1njibny"/>`,
		"fallback": "fluent-mdl2:underline",
	});
}

export default Component;
