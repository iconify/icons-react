import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc3492_1p.css';
import '../../css/b/bud9nuiqm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc3492_1p"/><path class="bud9nuiqm"/>`,
		"fallback": "carbon:promote",
	});
}

export default Component;
