import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysrojnb8p.css';
import '../../css/v/vzw7zpbii.css';
import '../../css/s/sgux9nbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ysrojnb8p"/><path class="vzw7zpbii"/><path class="sgux9nbtr"/></g>`,
		"fallback": "andrsrxn:settings",
	});
}

export default Component;
