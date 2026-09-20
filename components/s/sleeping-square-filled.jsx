import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vrg39dbeb.css';
import '../../css/o/ow_3vubzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vrg39dbeb"/><path class="ow_3vubzt"/></g>`,
		"fallback": "reicon:sleeping-square-filled",
	});
}

export default Component;
