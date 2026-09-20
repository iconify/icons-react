import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w2exqhbyi.css';
import '../../css/q/qqaujvb9x.css';
import '../../css/k/kg9tatb-r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="w2exqhbyi"/><path class="qqaujvb9x"/><path class="kg9tatb-r"/></g>`,
		"fallback": "thesvg-color:rapid-api",
	});
}

export default Component;
