import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/r/rmixrvbhu.css';
import '../../css/e/et9k69bbo.css';
import '../../css/p/p9t5yfbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="rmixrvbhu"/><path class="et9k69bbo"/><path class="p9t5yfbwc"/></g>`,
		"fallback": "solar:stars-minimalistic-broken",
	});
}

export default Component;
