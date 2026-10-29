import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/djiqt-b-p.css';
import '../../css/v/vfmfabckk.css';
import '../../css/n/nrf4-abjf.css';
import '../../css/e/emha3wbqe.css';
import '../../css/f/f5cf9ixua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="djiqt-b-p wm-k"/><path class="vfmfabckk wm-s"/><path class="nrf4-abjf wm-shadow"/><path class="emha3wbqe wm-k"/><path class="f5cf9ixua wm-s"/></g>`,
		"fallback": "withicons:user-check-engrave",
	});
}

export default Component;
