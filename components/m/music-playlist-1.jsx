import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te4pqlbvd.css';
import '../../css/a/axsuay2_n.css';
import '../../css/o/op0yrwbza.css';
import '../../css/f/feivdrsva.css';
import '../../css/l/l5b33wbnm.css';
import '../../css/t/tbvfvxb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="te4pqlbvd"/><path class="axsuay2_n"/><path class="op0yrwbza"/><path class="feivdrsva"/><path class="l5b33wbnm"/><path class="tbvfvxb_e"/></g>`,
		"fallback": "streamline-cyber-color:music-playlist-1",
	});
}

export default Component;
