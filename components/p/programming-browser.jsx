import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oxhqm1xrf.css';
import '../../css/a/aq9uolbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oxhqm1xrf"/><path class="aq9uolbrw"/></g>`,
		"fallback": "streamline-freehand:programming-browser",
	});
}

export default Component;
