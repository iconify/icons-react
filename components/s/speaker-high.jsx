import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cay9w4bva.css';
import '../../css/a/ad3u9_-bp.css';
import '../../css/a/ahgurpb-c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cay9w4bva"/><path class="ad3u9_-bp"/><path class="ahgurpb-c"/></g>`,
		"fallback": "pepicons:speaker-high",
	});
}

export default Component;
