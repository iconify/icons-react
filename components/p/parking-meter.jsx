import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zu2-l22yg.css';
import '../../css/p/pjhp_mbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zu2-l22yg"/><path class="pjhp_mbfh"/></g>`,
		"fallback": "lucide:parking-meter",
	});
}

export default Component;
