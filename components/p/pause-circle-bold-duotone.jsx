import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpv5vhdla.css';
import '../../css/r/rycrv8brk.css';
import '../../css/d/dkcg6hhbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpv5vhdla"/><path class="rycrv8brk"/><path class="dkcg6hhbf"/>`,
		"fallback": "solar:pause-circle-bold-duotone",
	});
}

export default Component;
