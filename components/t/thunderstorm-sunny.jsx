import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9oijwbuz.css';
import '../../css/t/t6e_qg8qr.css';
import '../../css/l/lu3gphbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9oijwbuz"/><path class="t6e_qg8qr"/><path class="lu3gphbdq"/></g>`,
		"fallback": "tdesign:thunderstorm-sunny",
	});
}

export default Component;
