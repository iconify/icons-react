import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jf30frtgq.css';
import '../../css/q/q5z3-zbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jf30frtgq"/><path class="q5z3-zbpq wm-a"/></g>`,
		"fallback": "withicons:rose-bouquet-solid",
	});
}

export default Component;
