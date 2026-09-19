import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8893zazi.css';
import '../../css/k/k-2_-zb2s.css';
import '../../css/a/aw-an9zor.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8893zazi"/><path class="k-2_-zb2s"/><path class="aw-an9zor"/>`,
		"fallback": "carbon:outlook-severe",
	});
}

export default Component;
