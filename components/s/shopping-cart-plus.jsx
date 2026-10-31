import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tmh6prbxg.css';
import '../../css/d/dmg4r-boq.css';
import '../../css/v/v2f6yubkf.css';
import '../../css/j/jjoj11miz.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="tmh6prbxg"/><path class="dmg4r-boq wm-shine"/><path class="v2f6yubkf wm-k"/><path class="jjoj11miz wm-a"/><path class="wm-deco xc_je6bwo"/></g>`,
		"fallback": "withicons-kawaii:shopping-cart-plus",
	});
}

export default Component;
