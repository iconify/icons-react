import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm4hehb3p.css';
import '../../css/p/p1u6d8a7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm4hehb3p"/><path class="p1u6d8a7v"/>`,
		"fallback": "selfhst:tvheadend",
	});
}

export default Component;
