import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tzp_eqb2b.css';
import '../../css/j/jpym14k6j.css';
import '../../css/r/rjoq_2one.css';
import '../../css/m/mr62tjban.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tzp_eqb2b"/><path class="jpym14k6j"/><path class="rjoq_2one"/><path class="mr62tjban"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-raising-hand",
	});
}

export default Component;
