import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw71rzbmh.css';
import '../../css/o/olyrocboy.css';
import '../../css/p/pg6-6logl.css';
import '../../css/z/z472j7n0q.css';
import '../../css/d/d87ytcxcs.css';
import '../../css/z/zg8u14v_b.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw71rzbmh"/><path class="olyrocboy"/><path class="pg6-6logl"/><path class="z472j7n0q"/><path class="d87ytcxcs"/><path class="zg8u14v_b"/>`,
		"fallback": "tabler-flags:south-sudan",
	});
}

export default Component;
