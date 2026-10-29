import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n9yndctfz.css';
import '../../css/m/mo_iaikpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="n9yndctfz"/><path class="mo_iaikpm wm-a"/></g>`,
		"fallback": "withicons:percent-solid",
	});
}

export default Component;
