import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kw4mn80dz.css';
import '../../css/a/auhktbe0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kw4mn80dz"/><path class="auhktbe0b"/></g>`,
		"fallback": "coolicons:square-user-duotone-round",
	});
}

export default Component;
