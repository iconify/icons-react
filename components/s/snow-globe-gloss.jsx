import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tyst-ib2o.css';
import '../../css/m/m2l8jwcvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tyst-ib2o wm-k"/><path class="m2l8jwcvz wm-a"/></g>`,
		"fallback": "withicons:snow-globe-gloss",
	});
}

export default Component;
