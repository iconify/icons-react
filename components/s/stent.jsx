import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u2y861bcs.css';
import '../../css/c/cu9lfibqq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u2y861bcs"/><path class="cu9lfibqq"/></g>`,
		"fallback": "healthicons:stent",
	});
}

export default Component;
