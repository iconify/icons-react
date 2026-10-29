import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/q/qpvrooc1e.css';
import '../../css/f/fdic79byo.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/v/vi7r50kxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="qpvrooc1e wm-s"/><path class="fdic79byo wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="vi7r50kxj wm-s"/></g>`,
		"fallback": "withicons:user-heart-engrave",
	});
}

export default Component;
