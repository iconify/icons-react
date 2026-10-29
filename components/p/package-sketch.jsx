import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fn-rc_bqj.css';
import '../../css/v/vjyjkb18v.css';
import '../../css/s/srsi27byd.css';
import '../../css/i/izw9l69_c.css';
import '../../css/q/q3a2vkc5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fn-rc_bqj"/><path class="vjyjkb18v wm-k"/><path class="srsi27byd wm-a"/><path class="izw9l69_c wm-k"/><path class="q3a2vkc5i wm-a"/></g>`,
		"fallback": "withicons:package-sketch",
	});
}

export default Component;
