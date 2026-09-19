import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/noninwb3c.css';
import '../../css/p/pc14bww2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="noninwb3c"/><path class="pc14bww2o"/></g>`,
		"fallback": "hugeicons:school-tie",
	});
}

export default Component;
