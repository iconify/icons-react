import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s48_-ubev.css';
import '../../css/k/k839w8bwb.css';
import '../../css/n/nk9jicc4w.css';
import '../../css/z/zi0v34izz.css';
import '../../css/m/m_y6rmbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s48_-ubev"/><path class="k839w8bwb"/><path class="nk9jicc4w"/><path class="zi0v34izz"/><path class="m_y6rmbsd"/></g>`,
		"fallback": "solar:smart-speaker-broken",
	});
}

export default Component;
