import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6a024b6c.css';
import '../../css/d/d3u3b8blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6a024b6c"/><path class="d3u3b8blq"/></g>`,
		"fallback": "coolicons:table-plus-corner-duotone-round",
	});
}

export default Component;
