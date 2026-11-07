import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dufqe1b5r.css';
import '../../css/r/rss4ctb5l.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dufqe1b5r"/><path class="rss4ctb5l"/><path class="cipdabcte"/></g>`,
		"fallback": "solar:mirror-left-broken",
	});
}

export default Component;
