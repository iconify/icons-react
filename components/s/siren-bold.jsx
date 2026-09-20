import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nuyvp_bwc.css';
import '../../css/f/f161wdbbo.css';
import '../../css/f/fi5wyfwwo.css';
import '../../css/n/n8qbuufsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nuyvp_bwc"/><path class="f161wdbbo"/><path class="fi5wyfwwo"/><path class="n8qbuufsn"/></g>`,
		"fallback": "solar:siren-bold",
	});
}

export default Component;
