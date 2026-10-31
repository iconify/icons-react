import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/ps76937xg.css';
import '../../css/j/jsu3n-fpc.css';
import '../../css/m/mn6mirbrg.css';
import '../../css/f/f6x9m15la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ps76937xg wm-shadow"/><path class="jsu3n-fpc"/><path class="mn6mirbrg"/><path class="f6x9m15la"/></g>`,
		"fallback": "withicons-retro:voicemail",
	});
}

export default Component;
