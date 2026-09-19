import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh20y2bau.css';
import '../../css/v/vf1c710_a.css';
import '../../css/l/lhow-8b0x.css';
import '../../css/m/mge_w5m3i.css';
import '../../css/k/klnn7_i_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh20y2bau"/><path class="vf1c710_a"/><path class="lhow-8b0x"/><path class="mge_w5m3i"/><path class="klnn7_i_v"/>`,
		"fallback": "ion:md-finger-print",
	});
}

export default Component;
