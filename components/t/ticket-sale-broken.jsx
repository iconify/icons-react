import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s7z5xbwmt.css';
import '../../css/b/b7ejdcj6s.css';
import '../../css/r/r1arkdbrf.css';
import '../../css/d/dmlvqrbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s7z5xbwmt"/><path class="b7ejdcj6s"/><path class="r1arkdbrf"/><path class="dmlvqrbvi"/></g>`,
		"fallback": "solar:ticket-sale-broken",
	});
}

export default Component;
