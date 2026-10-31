import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fcz9jen3o.css';
import '../../css/t/tg-b_sc3w.css';
import '../../css/m/maqav1bwd.css';
import '../../css/u/u83h24b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fcz9jen3o"/><path class="tg-b_sc3w wm-shine"/><path class="maqav1bwd wm-k"/><path class="u83h24b3i wm-a"/></g>`,
		"fallback": "withicons-kawaii:plane-takeoff",
	});
}

export default Component;
