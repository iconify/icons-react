import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvo8mpb5j.css';
import '../../css/i/iym-rnbyp.css';
import '../../css/p/p7m2plfyg.css';
import '../../css/i/imt9yz2ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wvo8mpb5j"/><path class="iym-rnbyp"/><path class="p7m2plfyg"/><path class="imt9yz2ll"/></g>`,
		"fallback": "lucide-extended:message-square-reply-duotone",
	});
}

export default Component;
