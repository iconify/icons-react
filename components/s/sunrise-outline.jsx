import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y7nwf97xa.css';
import '../../css/p/p_lzu_bcm.css';
import '../../css/o/ovbjaibzx.css';
import '../../css/a/avzl_8b-q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y7nwf97xa"/><path class="p_lzu_bcm"/><path class="ovbjaibzx"/><path class="avzl_8b-q"/></g>`,
		"fallback": "glyphs:sunrise-outline",
	});
}

export default Component;
