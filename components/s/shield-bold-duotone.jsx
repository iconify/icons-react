import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9-eprb_m.css';
import '../../css/f/fxlaitjmj.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/ho1hk4giy.css';
import '../../css/f/fu9tnywzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s9-eprb_m"/><path class="fxlaitjmj"/><g class="mc2zb0bvp"><path class="ho1hk4giy"/><path class="fu9tnywzi"/></g></g>`,
		"fallback": "solar:shield-bold-duotone",
	});
}

export default Component;
