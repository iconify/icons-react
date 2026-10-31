import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cn7ft0bub.css';
import '../../css/p/p0mquqbql.css';
import '../../css/o/oc0-g8x8e.css';
import '../../css/b/bn0h7_b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cn7ft0bub wm-shadow"/><path class="p0mquqbql wm-shadow"/><path class="oc0-g8x8e"/><path class="bn0h7_b7j"/></g>`,
		"fallback": "withicons-brutal:search",
	});
}

export default Component;
