import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tu1z-y7rv.css';
import '../../css/g/g5la6wotx.css';
import '../../css/x/xurpiib7h.css';
import '../../css/u/uk8jeuusp.css';
import '../../css/l/l9angejji.css';
import '../../css/e/ev5ha8b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="tu1z-y7rv wm-deco"/><path class="g5la6wotx wm-deco"/><path class="wm-deco xurpiib7h"/><path class="uk8jeuusp wm-k"/><path class="l9angejji wm-a"/><path class="ev5ha8b-e wm-a"/></g>`,
		"fallback": "withicons:router-blueprint",
	});
}

export default Component;
