import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jcair3ftq.css';
import '../../css/p/pz-3q4shj.css';
import '../../css/z/ze1c0kkes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jcair3ftq"/><path class="pz-3q4shj wm-a"/><path class="wm-s ze1c0kkes"/></g>`,
		"fallback": "withicons:satellite-dish-solid",
	});
}

export default Component;
