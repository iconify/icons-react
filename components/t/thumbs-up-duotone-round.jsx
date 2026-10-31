import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q79a1h-gd.css';
import '../../css/b/bvh2kac6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q79a1h-gd"/><path class="bvh2kac6x"/></g>`,
		"fallback": "coolicons:thumbs-up-duotone-round",
	});
}

export default Component;
