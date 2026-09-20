import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqlgc_bbb.css';
import '../../css/y/yexjaeb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqlgc_bbb"/><path class="yexjaeb9c"/></g>`,
		"fallback": "lucide:pocket-knife",
	});
}

export default Component;
