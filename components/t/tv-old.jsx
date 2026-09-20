import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvhu14bdv.css';
import '../../css/n/njd4din7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dvhu14bdv"/><path class="njd4din7f"/></g>`,
		"fallback": "majesticons:tv-old",
	});
}

export default Component;
