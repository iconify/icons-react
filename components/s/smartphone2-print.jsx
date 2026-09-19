import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo2h4kz3i.css';
import '../../css/a/adtlylf5k.css';
import '../../css/x/x489igpny.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xo2h4kz3i"/><path clip-rule="evenodd" class="adtlylf5k"/><path class="x489igpny"/></g>`,
		"fallback": "pepicons:smartphone2-print",
	});
}

export default Component;
