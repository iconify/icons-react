import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7rbqjl-d.css';
import '../../css/r/r7kcmcpio.css';
import '../../css/i/ipn962bhm.css';
import '../../css/t/tawcsacjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o7rbqjl-d"/><path class="r7kcmcpio"/><path clip-rule="evenodd" class="ipn962bhm"/><path class="tawcsacjo"/></g>`,
		"fallback": "fluent-emoji-flat:right-facing-fist-medium-dark",
	});
}

export default Component;
