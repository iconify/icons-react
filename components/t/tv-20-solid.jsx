import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kq-88ebqc.css';
import '../../css/v/v9ki5ibpw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kq-88ebqc"/><path clip-rule="evenodd" class="v9ki5ibpw"/></g>`,
		"fallback": "heroicons:tv-20-solid",
	});
}

export default Component;
