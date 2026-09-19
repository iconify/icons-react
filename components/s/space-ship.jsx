import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q-ouzl-kl.css';
import '../../css/u/uqx522byj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q-ouzl-kl"/><path class="uqx522byj"/></g>`,
		"fallback": "si-glyph:space-ship",
	});
}

export default Component;
