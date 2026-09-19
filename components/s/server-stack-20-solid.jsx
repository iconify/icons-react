import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/omzavhb5d.css';
import '../../css/c/ckfucqbjg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="omzavhb5d"/><path clip-rule="evenodd" class="ckfucqbjg"/></g>`,
		"fallback": "heroicons:server-stack-20-solid",
	});
}

export default Component;
