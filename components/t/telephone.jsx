import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xkadzabjm.css';
import '../../css/y/y-aykgvmv.css';
import '../../css/i/ivgr-ipsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xkadzabjm"/><path class="y-aykgvmv"/><path class="ivgr-ipsd"/></g>`,
		"fallback": "hugeicons:telephone",
	});
}

export default Component;
