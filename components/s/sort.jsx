import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nt1kefbbp.css';
import '../../css/q/qh81i-sch.css';
import '../../css/b/buhk06bdh.css';
import '../../css/v/vajc6qbkk.css';
import '../../css/c/cgkl-pu4m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nt1kefbbp"/><path class="qh81i-sch"/><path class="buhk06bdh"/><path class="vajc6qbkk"/><path class="cgkl-pu4m"/></g>`,
		"fallback": "pepicons:sort",
	});
}

export default Component;
