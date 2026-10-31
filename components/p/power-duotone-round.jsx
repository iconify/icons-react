import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfay3iu_t.css';
import '../../css/p/p4xbnib0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfay3iu_t"/><path class="p4xbnib0u"/></g>`,
		"fallback": "coolicons:power-duotone-round",
	});
}

export default Component;
