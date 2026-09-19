import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pglqq_f1q.css';
import '../../css/t/trfu-vbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pglqq_f1q"/><path class="trfu-vbwq"/>`,
		"fallback": "bx:slideshow",
	});
}

export default Component;
