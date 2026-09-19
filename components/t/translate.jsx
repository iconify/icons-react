import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw-dl5c5q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw-dl5c5q"/>`,
		"fallback": "fluent-mdl2:translate",
	});
}

export default Component;
