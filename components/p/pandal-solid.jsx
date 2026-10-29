import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mm2786bil.css';
import '../../css/t/tua2oi_ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mm2786bil"/><path class="tua2oi_ul wm-a"/></g>`,
		"fallback": "withicons:pandal-solid",
	});
}

export default Component;
