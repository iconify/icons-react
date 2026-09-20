import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ino-yacbs.css';
import '../../css/d/dsgk6fbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ino-yacbs"/><path class="dsgk6fbqm"/></g>`,
		"fallback": "solar:map-point-hospital-bold",
	});
}

export default Component;
