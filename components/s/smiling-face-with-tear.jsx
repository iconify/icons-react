import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/h/h9iiy9t5d.css';
import '../../css/d/dliykl5md.css';
import '../../css/n/n_uk_46sa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="h9iiy9t5d"/><path class="dliykl5md"/><path class="n_uk_46sa"/></g>`,
		"fallback": "fluent-emoji-flat:smiling-face-with-tear",
	});
}

export default Component;
