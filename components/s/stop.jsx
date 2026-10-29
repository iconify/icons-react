import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a7tzrfu3v.css';
import '../../css/t/tq0or871r.css';
import '../../css/v/v0n13_7_n.css';
import '../../css/x/x0cr1u99n.css';
import '../../css/x/xlz7ekbxq.css';
import '../../css/o/odb4jcbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="a7tzrfu3v wm-shadow"/><path class="tq0or871r"/><path class="v0n13_7_n"/><path class="x0cr1u99n"/><path class="wm-shine xlz7ekbxq"/><path class="odb4jcbcd wm-deco"/></g>`,
		"fallback": "withicons-sticker:stop",
	});
}

export default Component;
