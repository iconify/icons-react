import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep-7nhd8y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep-7nhd8y"/>`,
		"fallback": "carbon:traffic-flow",
	});
}

export default Component;
