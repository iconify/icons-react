import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jovek0baj.css';
import '../../css/m/mmdrd1b9q.css';
import '../../css/k/kvv6k2b5r.css';
import '../../css/s/s_faj7bmu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jovek0baj"/><path class="mmdrd1b9q"/><path class="kvv6k2b5r"/><path class="s_faj7bmu"/></g>`,
		"fallback": "fluent-emoji-flat:sun-behind-large-cloud",
	});
}

export default Component;
