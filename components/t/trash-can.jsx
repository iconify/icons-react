import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srd7lnbfg.css';
import '../../css/w/waqnvi5sy.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srd7lnbfg"/><path class="waqnvi5sy"/>`,
		"fallback": "lineicons:trash-can",
	});
}

export default Component;
