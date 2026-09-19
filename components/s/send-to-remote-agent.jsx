import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jffky70qm.css';
import '../../css/a/arb1x3j0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jffky70qm"/><path class="arb1x3j0o"/></g>`,
		"fallback": "codicon:send-to-remote-agent",
	});
}

export default Component;
