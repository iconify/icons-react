import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dsdpatbbu.css';
import '../../css/g/gqt1trakv.css';
import '../../css/z/zf-73sbfq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dsdpatbbu"/><path class="gqt1trakv"/><path class="zf-73sbfq"/></g>`,
		"fallback": "pepicons:open",
	});
}

export default Component;
