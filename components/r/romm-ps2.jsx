import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx8x8lb8l.css';
import '../../css/l/lpw68kbqq.css';
import '../../css/z/z_drxgbee.css';
import '../../css/a/aydsxsbar.css';
import '../../css/s/sicbvj6le.css';
import '../../css/y/y1erj8xgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx8x8lb8l"/><path class="lpw68kbqq"/><path class="z_drxgbee"/><path class="aydsxsbar"/><path class="sicbvj6le"/><path class="y1erj8xgd"/>`,
		"fallback": "selfhst:romm-ps2",
	});
}

export default Component;
