import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u7c-qacyz.css';
import '../../css/m/mhmnx3bse.css';
import '../../css/x/xewy-x6xy.css';
import '../../css/b/b151ecb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u7c-qacyz"/><path class="mhmnx3bse wm-a"/><path class="wm-a xewy-x6xy"/><path class="b151ecb2k"/></g>`,
		"fallback": "withicons:medal-duo",
	});
}

export default Component;
