import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l74913bgo.css';
import '../../css/u/ua_8urbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l74913bgo"/><path class="ua_8urbpn"/></g>`,
		"fallback": "streamline-freehand:phone-dial",
	});
}

export default Component;
