import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vzu_nabrz.css';
import '../../css/t/ttwf-zbzb.css';
import '../../css/l/lzc_04b6m.css';
import '../../css/o/on-fg_sbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vzu_nabrz"/><path class="ttwf-zbzb wm-a"/><path class="lzc_04b6m wm-k"/><path class="on-fg_sbj wm-a"/></g>`,
		"fallback": "withicons:search-x-sketch",
	});
}

export default Component;
