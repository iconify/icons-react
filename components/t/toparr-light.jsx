import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smq3h324s.css';
import '../../css/r/r-6ekkbps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smq3h324s"/><path class="r-6ekkbps"/>`,
		"fallback": "selfhst:toparr-light",
	});
}

export default Component;
