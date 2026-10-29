import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4yq6cc6d.css';
import '../../css/q/q3y4njx8r.css';
import '../../css/q/qnr2m4b6a.css';
import '../../css/r/rck3r4b3x.css';
import '../../css/n/ne_dluw1o.css';
import '../../css/f/fktdalw_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow x4yq6cc6d"/><path class="q3y4njx8r"/><path class="qnr2m4b6a"/><path class="rck3r4b3x"/><path class="ne_dluw1o wm-shine"/><path class="fktdalw_g wm-deco"/></g>`,
		"fallback": "withicons-sticker:mountain-snow",
	});
}

export default Component;
