import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tlebxxb7a.css';
import '../../css/n/njatvnr3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tlebxxb7a"/><path class="njatvnr3l"/></g>`,
		"fallback": "reicon:link3-duotone",
	});
}

export default Component;
