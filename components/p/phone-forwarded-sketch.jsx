import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v84758bcl.css';
import '../../css/q/qchrgwbbi.css';
import '../../css/r/r-qz_sbwo.css';
import '../../css/h/h1gv6acew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v84758bcl"/><path class="qchrgwbbi wm-s"/><path class="r-qz_sbwo wm-k"/><path class="h1gv6acew wm-s"/></g>`,
		"fallback": "withicons:phone-forwarded-sketch",
	});
}

export default Component;
