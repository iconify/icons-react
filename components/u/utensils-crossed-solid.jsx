import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xnrzlrbqo.css';
import '../../css/w/wd1zu_b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xnrzlrbqo"/><path class="wd1zu_b5w wm-a"/></g>`,
		"fallback": "withicons:utensils-crossed-solid",
	});
}

export default Component;
