import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrks0fbpf.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/v/v7tm0lbwk.css';
import '../../css/w/wz25ji4rl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrks0fbpf"/><g class="rpvb-o6bq"><path clip-rule="evenodd" class="v7tm0lbwk"/><path class="wz25ji4rl"/></g>`,
		"fallback": "openmoji:keycap-10",
	});
}

export default Component;
