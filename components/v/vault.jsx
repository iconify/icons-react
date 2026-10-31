import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j-3n49baf.css';
import '../../css/q/q8g1qb-co.css';
import '../../css/b/b9gie9x_g.css';
import '../../css/s/s73acnw4k.css';
import '../../css/j/jrrbw-btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="j-3n49baf wm-shadow"/><path class="q8g1qb-co wm-shadow"/><path class="b9gie9x_g"/><path class="s73acnw4k"/><path class="jrrbw-btm"/></g>`,
		"fallback": "withicons-brutal:vault",
	});
}

export default Component;
