import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av3f7qbsw.css';
import '../../css/s/sll_zg-uo.css';
import '../../css/r/rw5c_lizo.css';
import '../../css/t/tipw_dbaw.css';
import '../../css/a/a2gzbfbcc.css';
import '../../css/y/yeh403b_h.css';
import '../../css/y/y1uccccnt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av3f7qbsw"/><linearGradient id="SVGDthkZhyX" x1="109.65" x2="402.35" y1="109.65" y2="402.35" gradientUnits="userSpaceOnUse"><stop offset="0" class="sll_zg-uo"/><stop offset=".349" class="rw5c_lizo"/><stop offset=".533" class="tipw_dbaw"/><stop offset=".712" class="a2gzbfbcc"/><stop offset="1" class="yeh403b_h"/></linearGradient><path fill="url(#SVGDthkZhyX)" class="y1uccccnt"/>`,
		"fallback": "selfhst:meelo-dark",
	});
}

export default Component;
