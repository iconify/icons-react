import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n256ixhmk.css';
import '../../css/s/szj86mbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n256ixhmk"/><path class="szj86mbyh"/></g>`,
		"fallback": "coolicons:soup-duotone-round",
	});
}

export default Component;
