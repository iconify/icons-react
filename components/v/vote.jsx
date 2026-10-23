import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtv2p9w9w.css';
import '../../css/o/ot-tz-btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vtv2p9w9w"/><path class="ot-tz-btf"/></g>`,
		"fallback": "andrsrxn:vote",
	});
}

export default Component;
