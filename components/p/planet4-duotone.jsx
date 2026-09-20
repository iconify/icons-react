import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdk03xjzw.css';
import '../../css/u/u4ubiccdj.css';
import '../../css/t/ts6026b9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rdk03xjzw"/><path class="u4ubiccdj"/><path class="ts6026b9l"/></g>`,
		"fallback": "reicon:planet4-duotone",
	});
}

export default Component;
