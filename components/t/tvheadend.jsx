import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd94q1l9h.css';
import '../../css/p/p1u6d8a7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd94q1l9h"/><path class="p1u6d8a7v"/>`,
		"fallback": "selfhst:tvheadend",
	});
}

export default Component;
