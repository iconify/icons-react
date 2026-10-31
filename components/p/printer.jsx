import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyvz5bbnq.css';
import '../../css/g/glappyb6v.css';
import '../../css/k/kuv65nwmj.css';
import '../../css/c/cvvxyabmi.css';
import '../../css/p/p_6fegb1l.css';
import '../../css/c/c286c0npm.css';
import '../../css/n/nz33jl30i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eyvz5bbnq wm-k"/><path class="glappyb6v wm-a"/><path class="kuv65nwmj wm-deco"/><path class="cvvxyabmi wm-k"/><path class="p_6fegb1l wm-a"/><path class="c286c0npm wm-shadow"/><path class="nz33jl30i wm-shine"/></g>`,
		"fallback": "withicons-valentine:printer",
	});
}

export default Component;
