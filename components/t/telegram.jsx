import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/peqinxlmq.css';
import '../../css/j/jkgutjb-o.css';
import '../../css/o/ouxjkjb6z.css';
import '../../css/b/bjgojdb4u.css';
import '../../css/i/i9sg04a7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="peqinxlmq"/><path class="jkgutjb-o"/><path class="ouxjkjb6z"/><path class="bjgojdb4u"/><path class="i9sg04a7g"/></g>`,
		"fallback": "streamline-color:telegram",
	});
}

export default Component;
