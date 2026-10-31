import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wql_3nbpq.css';
import '../../css/p/png_4vbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wql_3nbpq"/><path class="png_4vbfn"/></g>`,
		"fallback": "coolicons:mention-duotone-round",
	});
}

export default Component;
