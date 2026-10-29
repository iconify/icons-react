import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/itd_mgbay.css';
import '../../css/z/zklq9-b5n.css';
import '../../css/h/hn-7-gxmc.css';
import '../../css/z/z11cu140c.css';
import '../../css/g/g2sik5moa.css';
import '../../css/w/we4z7ebtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="itd_mgbay wm-deco"/><path class="wm-deco zklq9-b5n"/><path class="hn-7-gxmc wm-deco"/><path class="wm-k z11cu140c"/><path class="g2sik5moa wm-a"/><path class="we4z7ebtz wm-s"/></g>`,
		"fallback": "withicons:pichkari-blueprint",
	});
}

export default Component;
