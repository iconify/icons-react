import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zn6hhk55l.css';
import '../../css/a/a99eo05ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zn6hhk55l"/><path class="a99eo05ji"/></g>`,
		"fallback": "healthicons:pharmacy-outline-24px",
	});
}

export default Component;
