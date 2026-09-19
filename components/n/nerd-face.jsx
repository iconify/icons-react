import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/t/trp06jkks.css';
import '../../css/z/zwt2plbal.css';
import '../../css/u/u6xiebcrd.css';
import '../../css/o/oryupyb4m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="trp06jkks"/><path class="zwt2plbal"/><path class="u6xiebcrd"/><path class="oryupyb4m"/></g>`,
		"fallback": "fluent-emoji-flat:nerd-face",
	});
}

export default Component;
