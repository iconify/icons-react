import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv5badiir.css';
import '../../css/e/e5a3g-bwq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv5badiir"/><path class="e5a3g-bwq"/>`,
		"fallback": "carbon:warning-square-filled",
	});
}

export default Component;
