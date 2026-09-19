import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/x/x82v_8qul.css';
import '../../css/k/knxr7ab-k.css';
import '../../css/d/dxm8dzbyd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="x82v_8qul"/><circle class="knxr7ab-k"/><circle class="dxm8dzbyd"/></g>`,
		"fallback": "catppuccin:root",
	});
}

export default Component;
