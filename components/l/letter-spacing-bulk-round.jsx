import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mjobq84pb.css';
import '../../css/e/eml2q1bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mjobq84pb"/><path class="eml2q1bzi"/></g>`,
		"fallback": "coolicons:letter-spacing-bulk-round",
	});
}

export default Component;
