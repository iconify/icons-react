import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kygvstb3n.css';
import '../../css/t/tgnn3f81w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kygvstb3n"/><path class="tgnn3f81w"/></g>`,
		"fallback": "coolicons:vercel-duotone-round",
	});
}

export default Component;
