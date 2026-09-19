import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dk2iqibxd.css';
import '../../css/s/sqqc6d8ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dk2iqibxd"/><path class="sqqc6d8ws"/></g>`,
		"fallback": "basil:location-check-outline",
	});
}

export default Component;
