import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_xcfvbzc.css';
import '../../css/j/jv6_y7bhu.css';
import '../../css/l/l823lc5hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w_xcfvbzc"/><path class="jv6_y7bhu"/><path class="l823lc5hz"/></g>`,
		"fallback": "tdesign:scroll-bar",
	});
}

export default Component;
