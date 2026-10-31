import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pw6hwmbxd.css';
import '../../css/m/m8ifjo6pc.css';
import '../../css/s/se9c0mbcv.css';
import '../../css/o/ossitz2cg.css';
import '../../css/h/h-cu46baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pw6hwmbxd wm-shadow"/><path class="m8ifjo6pc"/><path class="se9c0mbcv"/><path class="ossitz2cg"/><path class="h-cu46baq wm-s"/></g>`,
		"fallback": "withicons-retro:mosque",
	});
}

export default Component;
