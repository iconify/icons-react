import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhktnebyi.css';
import '../../css/x/x3okx1b0y.css';
import '../../css/w/wkj5pkqok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhktnebyi"/><path class="x3okx1b0y"/><path class="wkj5pkqok"/>`,
		"fallback": "selfhst:signature-pdf",
	});
}

export default Component;
