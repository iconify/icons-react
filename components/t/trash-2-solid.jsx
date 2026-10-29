import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mskdq03ii.css';
import '../../css/g/g08m52b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mskdq03ii"/><path class="g08m52b7j wm-a"/></g>`,
		"fallback": "withicons:trash-2-solid",
	});
}

export default Component;
