import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uqsr-lbmt.css';
import '../../css/v/vrp9m6m5s.css';
import '../../css/v/v5pzxzbfc.css';
import '../../css/w/wr1psg-gd.css';
import '../../css/y/yd-nrct1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uqsr-lbmt"/><path class="vrp9m6m5s"/><path class="v5pzxzbfc"/><path class="wr1psg-gd"/><path class="yd-nrct1l"/></g>`,
		"fallback": "streamline-ultimate:tags-refresh",
	});
}

export default Component;
