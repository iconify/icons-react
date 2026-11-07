import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfx_j7n7f.css';
import '../../css/w/wh26rrx6c.css';
import '../../css/c/cs_t9bc7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfx_j7n7f"/><path clip-rule="evenodd" class="wh26rrx6c"/><path class="cs_t9bc7w"/>`,
		"fallback": "solar:meditation-round-bold-duotone",
	});
}

export default Component;
