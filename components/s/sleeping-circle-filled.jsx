import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vrg39dbeb.css';
import '../../css/i/ihdyp846n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vrg39dbeb"/><path class="ihdyp846n"/></g>`,
		"fallback": "reicon:sleeping-circle-filled",
	});
}

export default Component;
