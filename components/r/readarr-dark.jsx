import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-dskr72e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-dskr72e"/>`,
		"fallback": "selfhst:readarr-dark",
	});
}

export default Component;
