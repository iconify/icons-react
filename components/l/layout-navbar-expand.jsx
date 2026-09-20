import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qx6dcbcwa.css';
import '../../css/i/i62zp4b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qx6dcbcwa"/><path class="i62zp4b5n"/></g>`,
		"fallback": "tabler:layout-navbar-expand",
	});
}

export default Component;
