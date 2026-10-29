import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x20tc-cns.css';
import '../../css/t/t8m058b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x20tc-cns"/><path class="t8m058b-g wm-s"/></g>`,
		"fallback": "withicons:user-clock-solid",
	});
}

export default Component;
