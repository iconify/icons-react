import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz3z958ur.css';
import '../../css/u/utltrjg1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz3z958ur"/><path class="utltrjg1m"/>`,
		"fallback": "selfhst:manifest-light",
	});
}

export default Component;
