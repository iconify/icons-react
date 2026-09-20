import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex7ta4b_g.css';
import '../../css/f/f-kxuolna.css';
import '../../css/x/xac8xcb0g.css';
import '../../css/e/ex2tlo8bg.css';
import '../../css/w/w0bfgxu-z.css';
import '../../css/y/y5bvnhhgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ex7ta4b_g"/><path class="f-kxuolna"/><path class="xac8xcb0g"/><path class="ex2tlo8bg"/><path class="w0bfgxu-z"/><path class="y5bvnhhgc"/></g>`,
		"fallback": "streamline-ultimate-color:shopping-basket-3",
	});
}

export default Component;
