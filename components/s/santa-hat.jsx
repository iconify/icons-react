import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u01elts_y.css';
import '../../css/z/z712tk0eb.css';
import '../../css/f/fn69l6bme.css';
import '../../css/u/u1mcb6b2z.css';
import '../../css/m/mdau48_gg.css';
import '../../css/m/m05liva_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u01elts_y wm-shadow"/><path class="z712tk0eb"/><path class="fn69l6bme"/><path class="u1mcb6b2z"/><path class="mdau48_gg"/><path class="m05liva_d"/></g>`,
		"fallback": "withicons-retro:santa-hat",
	});
}

export default Component;
