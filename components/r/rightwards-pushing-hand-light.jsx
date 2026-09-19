import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxybk_snf.css';
import '../../css/e/ei1kw8ohy.css';
import '../../css/e/e64o1_b9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rxybk_snf"/><path class="ei1kw8ohy"/><path class="e64o1_b9t"/></g>`,
		"fallback": "fluent-emoji-flat:rightwards-pushing-hand-light",
	});
}

export default Component;
