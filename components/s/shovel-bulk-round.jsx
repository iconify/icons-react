import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzt9nzzpo.css';
import '../../css/g/g8zp34bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gzt9nzzpo"/><path class="g8zp34bpo"/></g>`,
		"fallback": "coolicons:shovel-bulk-round",
	});
}

export default Component;
