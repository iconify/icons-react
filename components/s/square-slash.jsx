import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bhb_9-u4w.css';
import '../../css/u/u4sxwwy9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="bhb_9-u4w"/><path class="u4sxwwy9k"/></g>`,
		"fallback": "hugeicons:square-slash",
	});
}

export default Component;
