import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdzw2qd4h.css';
import '../../css/y/yrbx-abvk.css';
import '../../css/t/tqets1biq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdzw2qd4h"/><path class="yrbx-abvk"/><path class="tqets1biq"/>`,
		"fallback": "selfhst:microsoft-powerpoint-dark",
	});
}

export default Component;
