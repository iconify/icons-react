import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzetri7rr.css';
import '../../css/q/qtao-cc9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzetri7rr"/><path class="qtao-cc9r"/></g>`,
		"fallback": "hugeicons:rss-connected-02",
	});
}

export default Component;
