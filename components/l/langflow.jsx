import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shdyh8bir.css';
import '../../css/a/ay_63acmb.css';
import '../../css/d/dyv9fpbor.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shdyh8bir"/><path class="ay_63acmb"/><path class="dyv9fpbor"/>`,
		"fallback": "selfhst:langflow",
	});
}

export default Component;
