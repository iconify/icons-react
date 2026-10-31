import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xp_g-3-3v.css';
import '../../css/i/iv_t2mbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xp_g-3-3v"/><path class="iv_t2mbnq"/></g>`,
		"fallback": "coolicons:lamp-duotone-round",
	});
}

export default Component;
