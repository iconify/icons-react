import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/se56--rcw.css';
import '../../css/x/xmso0hb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="se56--rcw"/><path class="xmso0hb8r"/></g>`,
		"fallback": "coolicons:magic-wand-duotone-round",
	});
}

export default Component;
