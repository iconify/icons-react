import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i1sg4lbhw.css';
import '../../css/r/r0jd0fpwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i1sg4lbhw"/><path class="r0jd0fpwr"/></g>`,
		"fallback": "token:qtcon",
	});
}

export default Component;
