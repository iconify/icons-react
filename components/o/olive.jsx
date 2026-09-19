import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ct7w78vcf.css';
import '../../css/j/juwvjjjuf.css';
import '../../css/l/l4co50aqi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ct7w78vcf"/><path class="juwvjjjuf"/><path class="l4co50aqi"/></g>`,
		"fallback": "fluent-emoji-flat:olive",
	});
}

export default Component;
