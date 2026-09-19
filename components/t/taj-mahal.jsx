import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/owq791c7u.css';
import '../../css/b/ba-p_djvn.css';
import '../../css/l/laqqp5b-s.css';
import '../../css/b/bgex54baj.css';
import '../../css/u/uvzpq9h1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="owq791c7u"/><path class="ba-p_djvn"/><path class="laqqp5b-s"/><path class="bgex54baj"/><path class="uvzpq9h1b"/></g>`,
		"fallback": "hugeicons:taj-mahal",
	});
}

export default Component;
