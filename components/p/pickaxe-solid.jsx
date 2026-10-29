import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hyuppfalc.css';
import '../../css/b/bqk30nb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hyuppfalc"/><path class="bqk30nb-c wm-a"/></g>`,
		"fallback": "withicons:pickaxe-solid",
	});
}

export default Component;
