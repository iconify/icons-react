import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6e31r93c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6e31r93c"/>`,
		"fallback": "carbon:update-complete",
	});
}

export default Component;
