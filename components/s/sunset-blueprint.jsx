import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qrwzcbwle.css';
import '../../css/a/a4--3qb_l.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/a/at3dhwbti.css';
import '../../css/e/eenrhvbed.css';
import '../../css/h/hxwh25_5k.css';
import '../../css/y/yyvtfebob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qrwzcbwle wm-deco"/><path class="a4--3qb_l wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="at3dhwbti wm-k"/><path class="eenrhvbed wm-a"/><path class="hxwh25_5k wm-s"/><path class="wm-k yyvtfebob"/></g>`,
		"fallback": "withicons:sunset-blueprint",
	});
}

export default Component;
