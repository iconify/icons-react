import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9yudvbmp.css';
import '../../css/g/gcmjk5ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9yudvbmp"/><path class="gcmjk5ber"/></g>`,
		"fallback": "andrsrxn:puzzle",
	});
}

export default Component;
