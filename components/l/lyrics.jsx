import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhs44p4jy.css';
import '../../css/v/vr-35mbtq.css';
import '../../css/h/h-gy8obsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nhs44p4jy"/><path class="vr-35mbtq"/><path class="h-gy8obsn"/></g>`,
		"fallback": "andrsrxn:lyrics",
	});
}

export default Component;
