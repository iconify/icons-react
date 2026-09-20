import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nz-6xxb2y.css';
import '../../css/e/ec8_5vbia.css';
import '../../css/s/sog0659hq.css';
import '../../css/s/se_om3jvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nz-6xxb2y"/><path class="ec8_5vbia"/><path class="sog0659hq"/><path clip-rule="evenodd" class="se_om3jvd"/></g>`,
		"fallback": "solar:text-cross-circle-outline",
	});
}

export default Component;
