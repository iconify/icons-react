import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tl_-q3byo.css';
import '../../css/l/lp_4nbcbb.css';
import '../../css/g/g1j3m9kps.css';
import '../../css/p/pomor7b1j.css';
import '../../css/a/acbsssblb.css';
import '../../css/z/ze2d1f9co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tl_-q3byo wm-shadow"/><path class="lp_4nbcbb"/><path class="g1j3m9kps"/><path class="pomor7b1j"/><path class="acbsssblb wm-shine"/><path class="wm-deco ze2d1f9co"/></g>`,
		"fallback": "withicons-sticker:minimize-2",
	});
}

export default Component;
