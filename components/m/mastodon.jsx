import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zcj0y2b2p.css';
import '../../css/h/h6liou0dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zcj0y2b2p"/><path class="h6liou0dc"/></g>`,
		"fallback": "hugeicons:mastodon",
	});
}

export default Component;
