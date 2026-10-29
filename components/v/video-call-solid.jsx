import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/ptbp6rbaw.css';
import '../../css/s/sbj8_p_zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ptbp6rbaw"/><path class="sbj8_p_zn wm-a"/></g>`,
		"fallback": "withicons:video-call-solid",
	});
}

export default Component;
