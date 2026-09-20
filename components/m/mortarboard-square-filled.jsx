import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zl6lxcbhb.css';
import '../../css/b/bldwwtsai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zl6lxcbhb"/><path class="bldwwtsai"/></g>`,
		"fallback": "reicon:mortarboard-square-filled",
	});
}

export default Component;
