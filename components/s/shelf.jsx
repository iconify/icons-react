import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k1nzf_apg.css';
import '../../css/u/ukdbqacii.css';
import '../../css/i/i09a7zbwi.css';
import '../../css/y/yd-fuupbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k1nzf_apg"/><path class="ukdbqacii"/><path class="i09a7zbwi"/><path class="yd-fuupbm"/></g>`,
		"fallback": "iconaut:shelf",
	});
}

export default Component;
