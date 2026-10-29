import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lvmi_5btw.css';
import '../../css/s/svuiypvdj.css';
import '../../css/z/z8g2jgblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lvmi_5btw"/><path class="svuiypvdj wm-shadow"/><path class="z8g2jgblp"/></g>`,
		"fallback": "withicons:minus-engrave",
	});
}

export default Component;
