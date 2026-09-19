import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek96bfbmm.css';
import '../../css/l/lyo-h1s_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek96bfbmm"/><path class="lyo-h1s_u"/>`,
		"fallback": "ion:invert-mode-sharp",
	});
}

export default Component;
