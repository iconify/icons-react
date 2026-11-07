import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eurx18b7u.css';
import '../../css/i/iytgd1bjq.css';
import '../../css/e/ek9nj7bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eurx18b7u"/><path class="iytgd1bjq"/><path class="ek9nj7bwf"/></g>`,
		"fallback": "solar:map-broken",
	});
}

export default Component;
