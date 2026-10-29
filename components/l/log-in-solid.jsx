import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d46o7nbov.css';
import '../../css/p/pvc2m2hij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d46o7nbov"/><path class="pvc2m2hij wm-a"/></g>`,
		"fallback": "withicons:log-in-solid",
	});
}

export default Component;
