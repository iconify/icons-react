import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nqp1bwl7j.css';
import '../../css/s/saigv311i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nqp1bwl7j"/><path class="saigv311i"/></g>`,
		"fallback": "hugeicons:temperature",
	});
}

export default Component;
