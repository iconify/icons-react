import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jorfdtb8l.css';
import '../../css/b/bjsyczbay.css';
import '../../css/n/n5v0ddc-k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jorfdtb8l"/><path class="bjsyczbay"/><path clip-rule="evenodd" class="n5v0ddc-k"/></g>`,
		"fallback": "streamline-color:wallet-flat",
	});
}

export default Component;
