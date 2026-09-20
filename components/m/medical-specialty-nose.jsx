import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-4u7ug5e.css';
import '../../css/s/smcj90bil.css';
import '../../css/l/lhdusj-en.css';
import '../../css/u/upbsbhbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w-4u7ug5e"/><path class="smcj90bil"/><path class="lhdusj-en"/><path class="upbsbhbwv"/></g>`,
		"fallback": "streamline-ultimate-color:medical-specialty-nose",
	});
}

export default Component;
