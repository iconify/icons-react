import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hnaf22byc.css';
import '../../css/k/ka82qok4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hnaf22byc"/><path class="ka82qok4b"/></g>`,
		"fallback": "solar:passport-minimalistic-outline",
	});
}

export default Component;
