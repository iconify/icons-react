import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3e01zhej.css';
import '../../css/n/nzxb84zts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m3e01zhej"/><path class="nzxb84zts"/></g>`,
		"fallback": "andrsrxn:phone-down",
	});
}

export default Component;
