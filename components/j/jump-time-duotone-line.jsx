import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igjudsbww.css';
import '../../css/p/po5wmcbse.css';
import '../../css/w/wwtks_b8v.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGK4au95sq"><g class="igjudsbww"><path class="po5wmcbse"/><path class="wwtks_b8v"/></g></mask></defs><path mask="url(#SVGK4au95sq)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:jump-time-duotone-line",
	});
}

export default Component;
