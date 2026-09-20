import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/trjfhxy0p.css';
import '../../css/w/wf6p_7btu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="trjfhxy0p"/><path class="wf6p_7btu"/></g>`,
		"fallback": "keyline-icons:play-sharp-two-tone",
	});
}

export default Component;
