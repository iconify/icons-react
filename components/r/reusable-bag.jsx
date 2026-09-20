import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlugwdbyd.css';
import '../../css/a/a8v_pfb_t.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/v/vo0z5_u8l.css';
import '../../css/d/dvd6fwb9u.css';
import '../../css/t/tw4odbbpy.css';
import '../../css/o/obl237bgl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="dlugwdbyd"/><path class="a8v_pfb_t"/><g class="brzn_0bpr"><path class="vo0z5_u8l"/><g class="dvd6fwb9u"><path class="tw4odbbpy"/><rect class="obl237bgl"/></g></g>`,
		"fallback": "openmoji:reusable-bag",
	});
}

export default Component;
