import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a2sl48bmy.css';
import '../../css/j/j-efaqytf.css';
import '../../css/c/c80g_xb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a2sl48bmy"/><circle transform="rotate(-45 8.607 8.879)" class="j-efaqytf"/><path class="c80g_xb7k"/></g>`,
		"fallback": "solar:tag-line-duotone",
	});
}

export default Component;
