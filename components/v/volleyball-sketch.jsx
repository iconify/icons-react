import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gev3iobdk.css';
import '../../css/r/r0lcoh1hs.css';
import '../../css/l/l_usi832h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gev3iobdk"/><path class="r0lcoh1hs wm-k"/><path class="l_usi832h wm-a"/></g>`,
		"fallback": "withicons:volleyball-sketch",
	});
}

export default Component;
