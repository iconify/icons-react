import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fh2h8ablc.css';
import '../../css/e/eni8du_wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fh2h8ablc"/><path class="eni8du_wa wm-a"/></g>`,
		"fallback": "withicons:microscope-solid",
	});
}

export default Component;
