import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfo9zmb1i.css';
import '../../css/w/w0icurbfp.css';
import '../../css/k/kv9lyjb2a.css';
import '../../css/e/e7eydrofg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lfo9zmb1i"/><path class="w0icurbfp"/><path class="kv9lyjb2a"/><path class="e7eydrofg"/></g>`,
		"fallback": "fluent-emoji-flat:rice-ball",
	});
}

export default Component;
