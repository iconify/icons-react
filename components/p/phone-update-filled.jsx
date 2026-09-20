import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wsuinl6ag.css';
import '../../css/u/u_3f9jbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wsuinl6ag"/><path class="u_3f9jbva"/></g>`,
		"fallback": "reicon:phone-update-filled",
	});
}

export default Component;
