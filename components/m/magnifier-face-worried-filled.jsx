import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vafcejo4j.css';
import '../../css/c/c_gll4bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vafcejo4j"/><path class="c_gll4bwm"/></g>`,
		"fallback": "reicon:magnifier-face-worried-filled",
	});
}

export default Component;
