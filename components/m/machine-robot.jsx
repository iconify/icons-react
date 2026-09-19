import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/a7lsimbdp.css';
import '../../css/q/qr-7zuduy.css';
import '../../css/q/qv6zecc2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="a7lsimbdp"/><path class="qr-7zuduy"/><path class="qv6zecc2m"/></g>`,
		"fallback": "hugeicons:machine-robot",
	});
}

export default Component;
