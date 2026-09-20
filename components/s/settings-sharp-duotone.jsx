import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gh3_qccuq.css';
import '../../css/a/adqqsio1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gh3_qccuq"/><path class="adqqsio1k"/></g>`,
		"fallback": "keyline-icons:settings-sharp-duotone",
	});
}

export default Component;
