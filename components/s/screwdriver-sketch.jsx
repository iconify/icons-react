import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xis3okx1u.css';
import '../../css/u/ujbj_vebg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xis3okx1u"/><path class="ujbj_vebg wm-a"/></g>`,
		"fallback": "withicons:screwdriver-sketch",
	});
}

export default Component;
