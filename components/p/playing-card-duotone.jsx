import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrn3nmbns.css';
import '../../css/l/l1p3q2bay.css';
import '../../css/l/l-fwh23rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yrn3nmbns"/><path class="l1p3q2bay"/><path class="l-fwh23rz"/></g>`,
		"fallback": "lucide-extended:playing-card-duotone",
	});
}

export default Component;
