import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/otiz8qbou.css';
import '../../css/s/s2qmknl-c.css';
import '../../css/b/bz-nx6b1k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="otiz8qbou"/><path class="s2qmknl-c"/><path clip-rule="evenodd" class="bz-nx6b1k"/></g>`,
		"fallback": "pepicons:taxi",
	});
}

export default Component;
