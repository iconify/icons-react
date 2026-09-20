import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trwgz51xc.css';
import '../../css/c/cjo6hnbfe.css';
import '../../css/l/lp1z8gw3q.css';
import '../../css/n/ne82gibee.css';
import '../../css/d/da2cjjxei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="trwgz51xc"/><path class="cjo6hnbfe"/><path class="lp1z8gw3q"/><path class="ne82gibee"/><path class="da2cjjxei"/></g>`,
		"fallback": "streamline-ultimate-color:messages-bubble-disable",
	});
}

export default Component;
