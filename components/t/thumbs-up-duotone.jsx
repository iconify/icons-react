import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlxczzbqn.css';
import '../../css/z/zgj3unbvd.css';
import '../../css/t/tagg_7ocb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wlxczzbqn"/><path class="zgj3unbvd"/><path class="tagg_7ocb"/></g>`,
		"fallback": "lucide-extended:thumbs-up-duotone",
	});
}

export default Component;
