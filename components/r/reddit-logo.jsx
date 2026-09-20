import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dj1fxccvv.css';
import '../../css/t/t07-e-mxc.css';
import '../../css/l/ld1liobjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dj1fxccvv"/><path class="t07-e-mxc"/><path class="ld1liobjf"/></g>`,
		"fallback": "streamline-logos:reddit-logo",
	});
}

export default Component;
