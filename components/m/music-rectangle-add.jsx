import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp8-_-3lt.css';
import '../../css/p/pe-jo_bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lp8-_-3lt"/><path class="pe-jo_bvf"/></g>`,
		"fallback": "tdesign:music-rectangle-add",
	});
}

export default Component;
