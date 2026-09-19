import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxybk_snf.css';
import '../../css/o/o_3gp2byq.css';
import '../../css/j/j8g-7sb1w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rxybk_snf"/><path class="o_3gp2byq"/><path class="j8g-7sb1w"/></g>`,
		"fallback": "fluent-emoji-flat:rightwards-pushing-hand-medium",
	});
}

export default Component;
