import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gq7ai23mp.css';
import '../../css/s/sazcrr7dg.css';
import '../../css/w/wvhlwgbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="gq7ai23mp"/><path class="sazcrr7dg"/><path class="wvhlwgbgm"/></g>`,
		"fallback": "streamline-cyber:star-wars-darth-vader",
	});
}

export default Component;
