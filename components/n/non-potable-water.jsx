import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eit_1l5ho.css';
import '../../css/b/b-nwf6lqw.css';
import '../../css/m/me4ah5v_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eit_1l5ho"/><path class="b-nwf6lqw"/><path class="me4ah5v_n"/></g>`,
		"fallback": "fluent-emoji-flat:non-potable-water",
	});
}

export default Component;
