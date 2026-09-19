import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jbbmi7j6c.css';
import '../../css/u/u71nc2bjp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jbbmi7j6c"/><path class="u71nc2bjp"/></g>`,
		"fallback": "codicon:mic-compact",
	});
}

export default Component;
