import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/ilarnua5f.css';
import '../../css/a/a5xy4h2vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ilarnua5f"/><path class="a5xy4h2vl"/></g>`,
		"fallback": "keyline-icons:mars-sharp-fill",
	});
}

export default Component;
