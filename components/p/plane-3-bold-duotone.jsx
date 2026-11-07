import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_ruqrb_t.css';
import '../../css/i/iyp-m0sxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_ruqrb_t"/><path class="iyp-m0sxr"/>`,
		"fallback": "solar:plane-3-bold-duotone",
	});
}

export default Component;
