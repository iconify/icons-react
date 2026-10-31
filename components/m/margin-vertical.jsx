import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kaafxwecp.css';
import '../../css/w/weuljgb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="kaafxwecp"/><path class="weuljgb8u"/></g>`,
		"fallback": "lucide:margin-vertical",
	});
}

export default Component;
