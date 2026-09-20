import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thid7e.css';
import '../../css/g/gwaamo.css';
import '../../css/y/ydovum.css';
import '../../css/u/ud3ngs.css';
import '../../css/t/tiiyvt.css';
import '../../css/z/z52z6h.css';
import '../../css/d/d-k-hl-x.css';
import '../../css/f/fade-d1si2b.css';
import '../../css/f/fade-6y6uho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thid7e"/><path class="gwaamo ydovum"/><path class="ud3ngs ydovum"/><path class="tiiyvt ydovum"/><path class="ydovum z52z6h"/>`,
		"fallback": "line-md:moon-rising-loop",
	});
}

export default Component;
