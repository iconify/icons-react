import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/np-r4kire.css';
import '../../css/u/uuv6vcbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="np-r4kire"/><path class="uuv6vcbdv"/></g>`,
		"fallback": "hugeicons:package-dimensions-01",
	});
}

export default Component;
