import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcroczb8a.css';
import '../../css/w/w_-y8rbic.css';
import '../../css/s/stszo-b8l.css';
import '../../css/q/qtvivvozr.css';
import '../../css/v/vhs681b-h.css';
import '../../css/n/ntyx-6b7k.css';
import '../../css/s/sngejux6w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcroczb8a"/><path class="w_-y8rbic"/><path class="stszo-b8l"/><g class="qtvivvozr"><path class="vhs681b-h"/><path class="ntyx-6b7k"/><path class="sngejux6w"/></g>`,
		"fallback": "openmoji:leopard",
	});
}

export default Component;
