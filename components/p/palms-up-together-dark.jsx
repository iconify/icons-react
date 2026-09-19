import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3p6oj-cx.css';
import '../../css/s/sfl_nubxa.css';
import '../../css/a/apo_xnwmz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3p6oj-cx"/><path class="sfl_nubxa"/><path class="apo_xnwmz"/></g>`,
		"fallback": "fluent-emoji-flat:palms-up-together-dark",
	});
}

export default Component;
