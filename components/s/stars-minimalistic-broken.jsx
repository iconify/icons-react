import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/vha-i9b3a.css';
import '../../css/e/et9k69bbo.css';
import '../../css/w/whaw6nc4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="vha-i9b3a"/><path class="et9k69bbo"/><path class="whaw6nc4j"/></g>`,
		"fallback": "solar:stars-minimalistic-broken",
	});
}

export default Component;
