import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ws23v3s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5ws23v3s"/>`,
		"fallback": "fluent-mdl2:process-meta-task",
	});
}

export default Component;
