import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwdxjm24p.css';
import '../../css/n/n7bcujisu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwdxjm24p"/><path class="n7bcujisu"/></g>`,
		"fallback": "coolicons:user-duotone-round",
	});
}

export default Component;
