import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ie9ejj3-w.css';
import '../../css/p/pd_04xbwc.css';
import '../../css/a/a88uu03mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ie9ejj3-w"/><path class="pd_04xbwc wm-shadow"/><path class="a88uu03mv"/></g>`,
		"fallback": "withicons:loader-circle-engrave",
	});
}

export default Component;
