import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/udjhfybvl.css';
import '../../css/t/tgfwqbbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="udjhfybvl"/><path class="tgfwqbbvc wm-a"/></g>`,
		"fallback": "withicons:route-solid",
	});
}

export default Component;
