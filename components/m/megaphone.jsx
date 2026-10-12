import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdy82lzik.css';
import '../../css/g/g7m-emn5c.css';
import '../../css/q/qfxpl-fnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wdy82lzik"/><path class="g7m-emn5c"/><path class="qfxpl-fnd"/></g>`,
		"fallback": "andrsrxn:megaphone",
	});
}

export default Component;
