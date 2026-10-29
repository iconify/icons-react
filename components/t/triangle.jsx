import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tt03q571o.css';
import '../../css/i/ipt2rs9_u.css';
import '../../css/r/rvk4mcczi.css';
import '../../css/f/fiivc2mym.css';
import '../../css/c/czajz_bnq.css';
import '../../css/y/y_zzz-xtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tt03q571o wm-shadow"/><path class="ipt2rs9_u"/><path class="rvk4mcczi"/><path class="fiivc2mym"/><path class="czajz_bnq wm-shine"/><path class="wm-deco y_zzz-xtc"/></g>`,
		"fallback": "withicons-sticker:triangle",
	});
}

export default Component;
