import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/geik7_b-n.css';
import '../../css/h/h6pxxmopp.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/l/le4nw3b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="geik7_b-n wm-k"/><path class="h6pxxmopp wm-shadow"/><path class="l9lv5_bcf wm-k"/><path class="le4nw3b-s wm-a"/></g>`,
		"fallback": "withicons:scan-text-engrave",
	});
}

export default Component;
