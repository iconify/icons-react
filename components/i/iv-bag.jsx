import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yf97-ld5v.css';
import '../../css/p/px6sb2bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yf97-ld5v"/><path class="px6sb2bec"/></g>`,
		"fallback": "lucide:iv-bag",
	});
}

export default Component;
