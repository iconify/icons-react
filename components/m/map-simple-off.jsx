import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqki9xb_d.css';
import '../../css/g/g_6dvd7vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bqki9xb_d"/><path clip-rule="evenodd" class="g_6dvd7vi"/></g>`,
		"fallback": "majesticons:map-simple-off",
	});
}

export default Component;
