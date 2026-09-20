import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af0xy1b_c.css';
import '../../css/b/bqki9xb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="af0xy1b_c"/><path class="bqki9xb_d"/></g>`,
		"fallback": "majesticons:lock-off",
	});
}

export default Component;
