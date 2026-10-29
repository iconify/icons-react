import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ee4p10bhv.css';
import '../../css/k/kn_t37bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ee4p10bhv"/><path class="kn_t37bze wm-a"/></g>`,
		"fallback": "withicons:wand-solid",
	});
}

export default Component;
