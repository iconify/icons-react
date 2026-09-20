import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xsn4d11_m.css';
import '../../css/q/qxxix3b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xsn4d11_m"/><path class="qxxix3b9j"/></g>`,
		"fallback": "tabler:waterpolo",
	});
}

export default Component;
