import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ao44rhn1j.css';
import '../../css/b/bphei3uci.css';
import '../../css/h/hak54kboe.css';
import '../../css/a/akoy7wbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ao44rhn1j"/><path class="bphei3uci wm-k"/><path class="hak54kboe wm-k"/><path class="akoy7wbkr wm-a"/></g>`,
		"fallback": "withicons:shield-half-sketch",
	});
}

export default Component;
