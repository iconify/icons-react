import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h4r4-xrka.css';
import '../../css/f/frxxjd82r.css';
import '../../css/t/t6ywtfsaq.css';
import '../../css/g/gr51g0biu.css';
import '../../css/x/x2ocqx88i.css';
import '../../css/c/c6mo7m0bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h4r4-xrka wm-deco"/><path class="frxxjd82r wm-deco"/><path class="t6ywtfsaq wm-deco"/><path class="gr51g0biu wm-k"/><path class="wm-s x2ocqx88i"/><path class="c6mo7m0bg wm-k"/></g>`,
		"fallback": "withicons:user-star-blueprint",
	});
}

export default Component;
