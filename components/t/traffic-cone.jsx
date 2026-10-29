import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jy9_dcyeq.css';
import '../../css/x/x11_3acdh.css';
import '../../css/s/sx95o_jet.css';
import '../../css/t/taia8_bxe.css';
import '../../css/r/rtsx74b3j.css';
import '../../css/g/g0nd9h36n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jy9_dcyeq wm-shadow"/><path class="x11_3acdh"/><path class="sx95o_jet"/><path class="taia8_bxe"/><path class="rtsx74b3j wm-shine"/><path class="g0nd9h36n wm-deco"/></g>`,
		"fallback": "withicons-sticker:traffic-cone",
	});
}

export default Component;
