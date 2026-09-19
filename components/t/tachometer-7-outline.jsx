import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqfxi3m4a.css';
import '../../css/j/ju0c2p_ql.css';
import '../../css/k/k7xlqqbxt.css';
import '../../css/t/twbc292sc.css';
import '../../css/z/z2iqbq9uf.css';
import '../../css/u/umbb1ybci.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nqfxi3m4a"/><path clip-rule="evenodd" class="ju0c2p_ql"/><path class="k7xlqqbxt"/><path clip-rule="evenodd" class="twbc292sc"/><path clip-rule="evenodd" class="z2iqbq9uf"/><path class="umbb1ybci"/></g>`,
		"fallback": "glyphs:tachometer-7-outline",
	});
}

export default Component;
