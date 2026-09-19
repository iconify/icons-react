import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfbprr8-v.css';
import '../../css/r/rd41_2bru.css';
import '../../css/t/tllvccb_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfbprr8-v"/><path class="rd41_2bru"/><g><path class="tllvccb_c"/></g>`,
		"fallback": "ion:md-american-football",
	});
}

export default Component;
