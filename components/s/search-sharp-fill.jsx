import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wrc6tm74h.css';
import '../../css/p/p9760fzsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wrc6tm74h"/><path class="p9760fzsb"/></g>`,
		"fallback": "keyline-icons:search-sharp-fill",
	});
}

export default Component;
