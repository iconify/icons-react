import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rpa10wpfb.css';
import '../../css/x/x6ap76b3i.css';
import '../../css/x/x8jf0bcbh.css';
import '../../css/p/p7e6cxenp.css';
import '../../css/f/fxzt3nbzs.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="rpa10wpfb wm-shadow"/><path class="x6ap76b3i"/><path class="x8jf0bcbh"/><path class="p7e6cxenp"/><path class="fxzt3nbzs wm-shine"/><path class="qef_sobyj wm-deco"/></g>`,
		"fallback": "withicons-sticker:menu",
	});
}

export default Component;
