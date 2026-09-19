import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g86p7cczn.css';
import '../../css/e/eb847rttw.css';
import '../../css/d/d28pnkcvk.css';
import '../../css/h/hhonhdeix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g86p7cczn"/><path class="eb847rttw"/><path class="d28pnkcvk"/><path class="hhonhdeix"/>`,
		"fallback": "fxemoji:roastedsweetpotato",
	});
}

export default Component;
