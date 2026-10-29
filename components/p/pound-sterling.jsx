import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/ryi1dxbko.css';
import '../../css/b/bjpmb1k5o.css';
import '../../css/p/p_ubr5bwv.css';
import '../../css/h/hq6aujb9s.css';
import '../../css/g/gn1e-5n1r.css';
import '../../css/c/cw7qzob5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ryi1dxbko wm-shadow"/><path class="bjpmb1k5o"/><path class="p_ubr5bwv"/><path class="hq6aujb9s"/><path class="gn1e-5n1r wm-shine"/><path class="cw7qzob5o wm-deco"/></g>`,
		"fallback": "withicons-sticker:pound-sterling",
	});
}

export default Component;
