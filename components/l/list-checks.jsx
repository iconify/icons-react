import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7257x8dt.css';
import '../../css/j/j-914ccbg.css';
import '../../css/m/mh96pcydh.css';
import '../../css/x/x3z8mwbfv.css';
import '../../css/c/cb7zyvb3w.css';
import '../../css/v/v58hby3rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="l7257x8dt wm-shadow"/><path class="j-914ccbg"/><path class="mh96pcydh"/><path class="x3z8mwbfv"/><path class="cb7zyvb3w wm-shine"/><path class="v58hby3rh wm-deco"/></g>`,
		"fallback": "withicons-sticker:list-checks",
	});
}

export default Component;
