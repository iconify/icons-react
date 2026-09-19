import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jy78hpq8b.css';
import '../../css/q/qujowbbuv.css';
import '../../css/i/itd8vpbbc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jy78hpq8b"/><path class="qujowbbuv"/><path class="itd8vpbbc"/></g>`,
		"fallback": "glyphs-poly:leaf-1",
	});
}

export default Component;
