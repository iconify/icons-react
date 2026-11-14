import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lv7cpbc3u.css';
import '../../css/d/df-j23bjo.css';
import '../../css/s/spumvty-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lv7cpbc3u"/><path class="df-j23bjo"/><path class="spumvty-n"/></g>`,
		"fallback": "hugeicons:mail-receive-02",
	});
}

export default Component;
