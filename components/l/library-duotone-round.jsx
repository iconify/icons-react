import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xg35asl3g.css';
import '../../css/l/la97dvwdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xg35asl3g"/><path class="la97dvwdn"/></g>`,
		"fallback": "coolicons:library-duotone-round",
	});
}

export default Component;
