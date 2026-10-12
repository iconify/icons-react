import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiue2zb-d.css';
import '../../css/l/lotyo_brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(45 16.88 -.35)" class="iiue2zb-d"/><path class="lotyo_brj"/></g>`,
		"fallback": "andrsrxn:unlink",
	});
}

export default Component;
