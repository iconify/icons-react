import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p41rr2x8b.css';
import '../../css/e/e00g5nbxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p41rr2x8b"/><path class="e00g5nbxw"/>`,
		"fallback": "carbon:page-number",
	});
}

export default Component;
