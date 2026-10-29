import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ibpnj1b4u.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/a/awi56bc7v.css';
import '../../css/x/x79el81bg.css';
import '../../css/w/w5sdavbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ibpnj1b4u wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="awi56bc7v wm-k"/><path class="wm-a x79el81bg"/><path class="w5sdavbab wm-shine"/></g>`,
		"fallback": "withicons:water-balloon-blueprint",
	});
}

export default Component;
