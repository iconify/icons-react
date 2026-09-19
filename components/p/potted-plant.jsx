import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9xy-7bxh.css';
import '../../css/c/c9y4ot_gj.css';
import '../../css/t/t62270obu.css';
import '../../css/m/mimhi5bxh.css';
import '../../css/p/p16f6bcmt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r9xy-7bxh"/><path class="c9y4ot_gj"/><path class="t62270obu"/><path class="mimhi5bxh"/><path class="p16f6bcmt"/></g>`,
		"fallback": "fluent-emoji-flat:potted-plant",
	});
}

export default Component;
