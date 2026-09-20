import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uj7oa4mfl.css';
import '../../css/a/abb3__pkt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uj7oa4mfl"/><path class="abb3__pkt"/></g>`,
		"fallback": "streamline-flex-color:location-heart-pin-flat",
	});
}

export default Component;
