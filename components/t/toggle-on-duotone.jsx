import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ib5-75bck.css';
import '../../css/n/n3zf9obkq.css';
import '../../css/a/ad2a0hb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ib5-75bck"/><path class="n3zf9obkq"/><path class="ad2a0hb1h"/></g>`,
		"fallback": "si:toggle-on-duotone",
	});
}

export default Component;
