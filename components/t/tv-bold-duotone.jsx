import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_w6sbs0y.css';
import '../../css/v/vlxmvvgzk.css';
import '../../css/c/cf6plbcpm.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/p343m9bwv.css';
import '../../css/g/g9yhdubnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_w6sbs0y"/><path class="vlxmvvgzk"/><path class="cf6plbcpm"/><g class="xtpeb-edw"><path class="p343m9bwv"/><path class="g9yhdubnq"/></g>`,
		"fallback": "solar:tv-bold-duotone",
	});
}

export default Component;
