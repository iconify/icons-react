import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xolx0lz2c.css';
import '../../css/n/nbvgmcc_e.css';
import '../../css/k/kb6ezqarq.css';
import '../../css/n/nxqt7acrr.css';
import '../../css/w/wvfugfb3q.css';
import '../../css/r/rjas32bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow xolx0lz2c"/><path class="nbvgmcc_e"/><path class="kb6ezqarq"/><path class="nxqt7acrr"/><path class="wm-shine wvfugfb3q"/><path class="rjas32bmi wm-deco"/></g>`,
		"fallback": "withicons-sticker:shield-user",
	});
}

export default Component;
