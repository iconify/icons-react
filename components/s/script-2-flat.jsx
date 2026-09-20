import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/scbrlzbgc.css';
import '../../css/r/r8zl_v30g.css';
import '../../css/a/axyk0pfbi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="scbrlzbgc"/><path class="r8zl_v30g"/><path clip-rule="evenodd" class="axyk0pfbi"/></g>`,
		"fallback": "streamline-color:script-2-flat",
	});
}

export default Component;
