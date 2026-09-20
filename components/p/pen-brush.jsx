import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdvkx2b8r.css';
import '../../css/g/g5el1zaty.css';
import '../../css/u/uuo1u8bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rdvkx2b8r"/><path class="g5el1zaty"/><path class="uuo1u8bhc"/></g>`,
		"fallback": "tdesign:pen-brush",
	});
}

export default Component;
