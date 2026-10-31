import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewi2z1bdf.css';
import '../../css/w/wi2dxbbsx.css';
import '../../css/w/w-q9khbce.css';
import '../../css/o/o5ajpab6k.css';
import '../../css/k/kf6wa5b6m.css';
import '../../css/h/hcdcwlgkp.css';
import '../../css/v/v80d3ynpv.css';
import '../../css/r/rs6_twyik.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewi2z1bdf"/><path class="wi2dxbbsx"/><path class="w-q9khbce"/><path class="o5ajpab6k"/><path class="kf6wa5b6m"/><path class="hcdcwlgkp"/><path class="v80d3ynpv"/><path class="rs6_twyik"/>`,
		"fallback": "tabler-flags:niue",
	});
}

export default Component;
