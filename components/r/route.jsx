import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oqnu7-a1n.css';
import '../../css/i/imjb_8bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oqnu7-a1n"/><path class="imjb_8bqw"/></g>`,
		"fallback": "reicon:route",
	});
}

export default Component;
