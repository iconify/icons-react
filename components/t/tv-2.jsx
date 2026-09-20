import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wneoubc6n.css';
import '../../css/r/r8-cjywgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wneoubc6n"/><rect class="r8-cjywgb"/></g>`,
		"fallback": "lucide:tv-2",
	});
}

export default Component;
