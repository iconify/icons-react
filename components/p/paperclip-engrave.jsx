import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gxbk2tj2j.css';
import '../../css/r/ral12u3xi.css';
import '../../css/n/ns9l4jexk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gxbk2tj2j"/><path class="ral12u3xi wm-shadow"/><path class="ns9l4jexk"/></g>`,
		"fallback": "withicons:paperclip-engrave",
	});
}

export default Component;
