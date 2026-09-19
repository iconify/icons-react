import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k50d2ackq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k50d2ackq"/>`,
		"fallback": "carbon:orchestrate",
	});
}

export default Component;
