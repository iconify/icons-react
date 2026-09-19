import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v_7nsv_zm.css';
import '../../css/h/h8am0cw8x.css';
import '../../css/j/jn6ooqbss.css';
import '../../css/x/x0bohhy_d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v_7nsv_zm"/><path class="h8am0cw8x"/><path class="jn6ooqbss"/><path class="x0bohhy_d"/></g>`,
		"fallback": "glyphs:sunset-outline",
	});
}

export default Component;
