import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lcyf-c5zn.css';
import '../../css/l/ll9sdtbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lcyf-c5zn"/><path class="ll9sdtbux wm-a"/></g>`,
		"fallback": "withicons:tooth-crown-solid",
	});
}

export default Component;
