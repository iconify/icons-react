import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdwk_l0ew.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r0d20pbmo.css';
import '../../css/o/owoni5tju.css';
import '../../css/w/w8dto046u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdwk_l0ew secondary"/><g class="dt0cm9dhy primary"><path class="r0d20pbmo"/><path class="owoni5tju"/><path class="w8dto046u"/></g>`,
		"fallback": "iconaut:layer-arrow-up-duo",
	});
}

export default Component;
