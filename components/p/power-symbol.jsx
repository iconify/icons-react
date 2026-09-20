import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzwgnzb9h.css';
import '../../css/k/k-khy6r6b.css';
import '../../css/z/z04drlb1l.css';
import '../../css/q/qw2l4vbgr.css';
import '../../css/u/uuqfk7b7j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fzwgnzb9h"/><path class="k-khy6r6b"/><g class="z04drlb1l"><path class="qw2l4vbgr"/><path class="uuqfk7b7j"/></g>`,
		"fallback": "openmoji:power-symbol",
	});
}

export default Component;
