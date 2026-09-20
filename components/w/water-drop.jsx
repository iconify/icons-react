import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/ja90s6bgq.css';
import '../../css/b/bomzn_ltn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ja90s6bgq"/><path class="bomzn_ltn"/></g>`,
		"fallback": "pepicons-pencil:water-drop",
	});
}

export default Component;
