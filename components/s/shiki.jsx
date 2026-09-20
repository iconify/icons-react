import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ng8s96spv.css';
import '../../css/z/z6wwtxb3i.css';
import '../../css/x/x94l9_bfe.css';
import '../../css/i/io-f5ccfn.css';

const viewBox = {"width":266,"height":266};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ng8s96spv"/><path class="z6wwtxb3i"/><path class="x94l9_bfe"/><path class="io-f5ccfn"/></g>`,
		"fallback": "thesvg-color:shiki",
	});
}

export default Component;
