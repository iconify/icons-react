import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s5lly0hrz.css';
import '../../css/v/v37dc2d3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s5lly0hrz"/><path class="v37dc2d3c"/></g>`,
		"fallback": "coolicons:washing-machine-duotone-round",
	});
}

export default Component;
