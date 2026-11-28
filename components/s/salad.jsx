import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sdvrmkb1y.css';
import '../../css/t/tzst57atz.css';
import '../../css/k/k4pti5n_u.css';
import '../../css/z/zxw4384ui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sdvrmkb1y"/><path class="tzst57atz"/><path class="k4pti5n_u"/><path class="zxw4384ui"/></g>`,
		"fallback": "iconaut:salad",
	});
}

export default Component;
