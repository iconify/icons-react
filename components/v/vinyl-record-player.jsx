import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ih6tv-bnd.css';
import '../../css/p/pc1wkcb7o.css';
import '../../css/z/z1k4a8z-v.css';
import '../../css/w/w4_dk0bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ih6tv-bnd"/><path class="pc1wkcb7o"/><path class="z1k4a8z-v"/><path class="w4_dk0bsq"/></g>`,
		"fallback": "streamline-ultimate:vinyl-record-player",
	});
}

export default Component;
