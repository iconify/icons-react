import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l40zxibew.css';
import '../../css/c/cgesgwbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l40zxibew"/><path class="cgesgwbmn wm-s"/></g>`,
		"fallback": "withicons:list-plus-solid",
	});
}

export default Component;
