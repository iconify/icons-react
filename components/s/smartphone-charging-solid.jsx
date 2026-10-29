import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bxgbsjbuk.css';
import '../../css/v/v9zpbe5rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bxgbsjbuk"/><path class="v9zpbe5rc wm-s"/></g>`,
		"fallback": "withicons:smartphone-charging-solid",
	});
}

export default Component;
