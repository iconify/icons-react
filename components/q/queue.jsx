import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vhlh1hb6b.css';
import '../../css/m/mno1kzu5b.css';
import '../../css/d/didum-i0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vhlh1hb6b"/><path class="mno1kzu5b"/><path class="didum-i0b"/></g>`,
		"fallback": "tdesign:queue",
	});
}

export default Component;
