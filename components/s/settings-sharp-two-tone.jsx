import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gh3_qccuq.css';
import '../../css/l/lbh3nhbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gh3_qccuq"/><path class="lbh3nhbrk"/></g>`,
		"fallback": "keyline-icons:settings-sharp-two-tone",
	});
}

export default Component;
