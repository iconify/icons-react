import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v_g122bhw.css';
import '../../css/l/leah5zbjz.css';
import '../../css/h/hior73p6y.css';
import '../../css/u/u5duy_b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v_g122bhw"/><path class="leah5zbjz"/><path class="hior73p6y"/><path class="u5duy_b3g"/></g>`,
		"fallback": "keyline-icons:lightbulb-sparkles-duotone",
	});
}

export default Component;
