import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f98dwt4hq.css';
import '../../css/c/cqg5ru5ax.css';
import '../../css/s/sy-98tb6x.css';
import '../../css/n/nzmqz3bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f98dwt4hq"/><path class="cqg5ru5ax"/><path class="sy-98tb6x"/><path class="nzmqz3bvt"/></g>`,
		"fallback": "solar:smart-speaker-line-duotone",
	});
}

export default Component;
