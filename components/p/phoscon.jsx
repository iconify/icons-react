import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx852xbfi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx852xbfi"/>`,
		"fallback": "selfhst:phoscon",
	});
}

export default Component;
