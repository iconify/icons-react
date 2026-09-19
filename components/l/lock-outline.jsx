import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vkdb8v_jn.css';
import '../../css/v/v6g0_ypjy.css';
import '../../css/u/uvl5k5lzm.css';
import '../../css/x/xu8bgpb2t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vkdb8v_jn"/><path class="v6g0_ypjy"/><path class="uvl5k5lzm"/><path class="xu8bgpb2t"/></g>`,
		"fallback": "glyphs:lock-outline",
	});
}

export default Component;
