import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bbg_e0beb.css';
import '../../css/c/czb17zbdq.css';
import '../../css/a/ablr-2bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bbg_e0beb"/><circle class="czb17zbdq"/><path class="ablr-2bmr"/></g>`,
		"fallback": "lets-icons:pass-light",
	});
}

export default Component;
