import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mh8qyk3wx.css';
import '../../css/l/laiy2jm3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mh8qyk3wx"/><path class="laiy2jm3n"/></g>`,
		"fallback": "solar:shuffle-broken",
	});
}

export default Component;
