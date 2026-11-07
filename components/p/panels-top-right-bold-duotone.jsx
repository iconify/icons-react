import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2c2_w_6w.css';
import '../../css/r/r59yt9kbk.css';
import '../../css/i/ihrvnl4wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2c2_w_6w"/><path class="r59yt9kbk"/><path class="ihrvnl4wp"/>`,
		"fallback": "solar:panels-top-right-bold-duotone",
	});
}

export default Component;
