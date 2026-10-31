import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4wv1db0e.css';
import '../../css/s/ssfr0gbcf.css';
import '../../css/w/wi2dxbbsx.css';
import '../../css/w/w-q9khbce.css';
import '../../css/o/o5ajpab6k.css';
import '../../css/k/kf6wa5b6m.css';
import '../../css/h/hcdcwlgkp.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4wv1db0e"/><path class="ssfr0gbcf"/><path class="wi2dxbbsx"/><path class="w-q9khbce"/><path class="o5ajpab6k"/><path class="kf6wa5b6m"/><path class="hcdcwlgkp"/>`,
		"fallback": "tabler-flags:tuvalu",
	});
}

export default Component;
