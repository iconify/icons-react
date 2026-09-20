import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxgh_ybwj.css';
import '../../css/x/xhhk44bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mxgh_ybwj"/><path class="xhhk44bxb"/></g>`,
		"fallback": "lucide:shrub",
	});
}

export default Component;
