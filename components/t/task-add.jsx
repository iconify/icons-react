import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf9u9jrxa.css';
import '../../css/u/uz2w82b1t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf9u9jrxa"/><path class="uz2w82b1t"/>`,
		"fallback": "carbon:task-add",
	});
}

export default Component;
