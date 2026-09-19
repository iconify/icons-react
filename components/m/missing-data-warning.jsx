import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maczq5bmt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maczq5bmt"/>`,
		"fallback": "carbon:missing-data-warning",
	});
}

export default Component;
