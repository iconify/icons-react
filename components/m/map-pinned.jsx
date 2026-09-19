import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zqrrajf2c.css';
import '../../css/f/fjo6rmbxh.css';
import '../../css/g/gqchk_boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zqrrajf2c"/><path class="fjo6rmbxh"/><path class="gqchk_boi"/></g>`,
		"fallback": "hugeicons:map-pinned",
	});
}

export default Component;
