import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jenjbabej.css';
import '../../css/z/zxur0hb6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jenjbabej"/><path class="zxur0hb6n"/></g>`,
		"fallback": "bi:menu-button",
	});
}

export default Component;
