import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qnmts8ajg.css';
import '../../css/o/otxwmwbyz.css';
import '../../css/l/lzwe0dohb.css';
import '../../css/i/iybdt-b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qnmts8ajg"/><path class="otxwmwbyz"/><path class="lzwe0dohb"/><path class="iybdt-b-w"/></g>`,
		"fallback": "hugeicons:video-console",
	});
}

export default Component;
