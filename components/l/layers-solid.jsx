import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xu03s6ltk.css';
import '../../css/s/syy_egqkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xu03s6ltk"/><path class="syy_egqkq wm-a"/></g>`,
		"fallback": "withicons:layers-solid",
	});
}

export default Component;
