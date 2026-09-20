import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uqd5fgvfg.css';
import '../../css/x/x0ei-kbtp.css';
import '../../css/k/kyu9b5big.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uqd5fgvfg"/><path class="x0ei-kbtp"/><path class="kyu9b5big"/></g>`,
		"fallback": "streamline-sharp:memes-comment-reply",
	});
}

export default Component;
