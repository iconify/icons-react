import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bkjbhub4h.css';
import '../../css/t/tqhcx__ph.css';
import '../../css/k/k0zkyswzk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bkjbhub4h"/><path class="tqhcx__ph"/><circle class="k0zkyswzk"/></g>`,
		"fallback": "charm:rocket",
	});
}

export default Component;
