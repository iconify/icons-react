import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bnndz9hbn.css';
import '../../css/r/r70z4z73s.css';
import '../../css/d/dz3e1ibvs.css';
import '../../css/s/sv8__t8-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bnndz9hbn wm-k"/><path class="r70z4z73s wm-shadow"/><path class="dz3e1ibvs wm-k"/><path class="sv8__t8-c wm-a"/></g>`,
		"fallback": "withicons:lightbulb-engrave",
	});
}

export default Component;
