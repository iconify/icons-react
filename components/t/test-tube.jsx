import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ypx0kvb5q.css';
import '../../css/f/fxpg8qb2i.css';
import '../../css/a/a2jwf8b5s.css';
import '../../css/i/ianen82vg.css';
import '../../css/l/lfucqd9kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow ypx0kvb5q"/><path class="fxpg8qb2i wm-shadow"/><path class="a2jwf8b5s"/><path class="ianen82vg"/><path class="lfucqd9kg"/></g>`,
		"fallback": "withicons-brutal:test-tube",
	});
}

export default Component;
