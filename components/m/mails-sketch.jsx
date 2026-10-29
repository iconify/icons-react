import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ne_2utbrs.css';
import '../../css/l/l6-c-bchr.css';
import '../../css/r/r-2j79obd.css';
import '../../css/s/s9_1i3bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ne_2utbrs"/><path class="l6-c-bchr wm-a"/><path class="r-2j79obd wm-k"/><path class="s9_1i3bbk wm-a"/></g>`,
		"fallback": "withicons:mails-sketch",
	});
}

export default Component;
