import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g2wdl1bwg.css';
import '../../css/k/kxrjztx3q.css';
import '../../css/v/v9kvji8te.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g2wdl1bwg wm-k"/><path class="kxrjztx3q wm-shadow"/><path class="v9kvji8te wm-k"/><path class="hbi8hhkfx wm-a"/></g>`,
		"fallback": "withicons:locate-fixed-engrave",
	});
}

export default Component;
