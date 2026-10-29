import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/utt4xvbom.css';
import '../../css/q/qat37oo-m.css';
import '../../css/a/anga10bot.css';
import '../../css/z/zrmw_bcdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="utt4xvbom wm-k"/><path class="qat37oo-m wm-a"/><path class="anga10bot wm-k"/><path class="wm-a zrmw_bcdh"/></g>`,
		"fallback": "withicons:swords-sketch",
	});
}

export default Component;
