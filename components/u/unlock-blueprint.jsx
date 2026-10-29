import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dl6rh5bzb.css';
import '../../css/k/kgoj5abwo.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/n/nvjwwccph.css';
import '../../css/n/nc837pzto.css';
import '../../css/i/i613agbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dl6rh5bzb wm-deco"/><path class="kgoj5abwo wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="nvjwwccph wm-k"/><path class="nc837pzto wm-a"/><path class="i613agbrs wm-a"/></g>`,
		"fallback": "withicons:unlock-blueprint",
	});
}

export default Component;
