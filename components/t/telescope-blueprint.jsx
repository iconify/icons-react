import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mgbuli8ld.css';
import '../../css/z/zudynuado.css';
import '../../css/m/mbghn_21q.css';
import '../../css/d/dxsapjb1k.css';
import '../../css/d/da6a3-mpd.css';
import '../../css/d/d0yfznbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mgbuli8ld wm-deco"/><path class="wm-deco zudynuado"/><path class="mbghn_21q wm-deco"/><path class="dxsapjb1k wm-k"/><path class="da6a3-mpd wm-a"/><path class="d0yfznbcg wm-a"/></g>`,
		"fallback": "withicons:telescope-blueprint",
	});
}

export default Component;
