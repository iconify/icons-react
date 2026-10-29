import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y3rzw4quo.css';
import '../../css/b/bt8z4zwkv.css';
import '../../css/w/w6cbyybob.css';
import '../../css/v/vf78t_b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="y3rzw4quo"/><path class="bt8z4zwkv wm-a"/><path class="w6cbyybob wm-k"/><path class="vf78t_b8x wm-a"/></g>`,
		"fallback": "withicons:pill-sketch",
	});
}

export default Component;
