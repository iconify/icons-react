import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f1b9shfss.css';
import '../../css/z/zomf0k0wi.css';
import '../../css/l/l94wqzpmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f1b9shfss wm-k"/><path class="wm-k zomf0k0wi"/><path class="l94wqzpmb wm-a"/></g>`,
		"fallback": "withicons:list-checks-sketch",
	});
}

export default Component;
