import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xrkmoua-f.css';
import '../../css/h/hpa3tgbir.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xrkmoua-f"/><path class="hpa3tgbir"/></g>`,
		"fallback": "glyphs-poly:spade",
	});
}

export default Component;
