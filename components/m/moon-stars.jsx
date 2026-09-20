import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lkx51sfzj.css';
import '../../css/e/e5nl-cb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lkx51sfzj"/><path class="e5nl-cb7n"/></g>`,
		"fallback": "reicon:moon-stars",
	});
}

export default Component;
