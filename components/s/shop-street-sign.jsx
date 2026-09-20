import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qjtl7_4ah.css';
import '../../css/e/e5aykiben.css';
import '../../css/w/wf76rd5aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qjtl7_4ah"/><path class="e5aykiben"/><path class="wf76rd5aj"/></g>`,
		"fallback": "streamline-freehand:shop-street-sign",
	});
}

export default Component;
