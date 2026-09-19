import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyu-84h5s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyu-84h5s"/>`,
		"fallback": "fluent-mdl2:stopwatch",
	});
}

export default Component;
