import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mze3curll.css';
import '../../css/d/d17zgng_a.css';
import '../../css/z/z43j8q9jh.css';
import '../../css/u/uvfwd4wqi.css';
import '../../css/f/f26bn-hui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mze3curll wm-deco"/><path class="d17zgng_a wm-deco"/><path class="wm-deco z43j8q9jh"/><path class="uvfwd4wqi wm-k"/><path class="f26bn-hui wm-a"/></g>`,
		"fallback": "withicons:megaphone-blueprint",
	});
}

export default Component;
