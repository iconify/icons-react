import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7m7xy44u.css';
import '../../css/t/t5jb97bqd.css';
import '../../css/c/cxsgvgbjp.css';
import '../../css/k/k413g3b0n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7m7xy44u"/><path class="t5jb97bqd"/><path class="cxsgvgbjp"/><path class="k413g3b0n"/>`,
		"fallback": "energy-icons:lightning-protection-20-bold",
	});
}

export default Component;
