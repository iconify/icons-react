import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mun8-6qsp.css';
import '../../css/v/v5r32fbat.css';
import '../../css/h/hxx-u4vvz.css';
import '../../css/z/zpwhebc3e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mun8-6qsp"/><path class="v5r32fbat"/><path class="hxx-u4vvz"/><path class="zpwhebc3e"/></g>`,
		"fallback": "glyphs:users-outline",
	});
}

export default Component;
