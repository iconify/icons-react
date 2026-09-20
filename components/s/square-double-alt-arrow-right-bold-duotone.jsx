import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz487oylf.css';
import '../../css/r/rr9cw5qun.css';
import '../../css/h/hna9ewztx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zz487oylf"/><path class="rr9cw5qun"/><path class="hna9ewztx"/></g>`,
		"fallback": "solar:square-double-alt-arrow-right-bold-duotone",
	});
}

export default Component;
