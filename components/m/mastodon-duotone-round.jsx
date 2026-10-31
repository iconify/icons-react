import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wc7o1vb4o.css';
import '../../css/s/snjmdcbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wc7o1vb4o"/><path class="snjmdcbst"/></g>`,
		"fallback": "coolicons:mastodon-duotone-round",
	});
}

export default Component;
