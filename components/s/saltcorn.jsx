import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5aelq3-p.css';
import '../../css/r/r6ik5x-ce.css';
import '../../css/m/mp3pi0u8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5aelq3-p"/><path class="r6ik5x-ce"/><path class="mp3pi0u8z"/>`,
		"fallback": "selfhst:saltcorn",
	});
}

export default Component;
