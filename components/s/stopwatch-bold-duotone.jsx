import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szjj1eb9x.css';
import '../../css/y/y7btgy5eh.css';
import '../../css/i/isfz-28nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szjj1eb9x"/><path class="y7btgy5eh"/><path class="isfz-28nj"/>`,
		"fallback": "solar:stopwatch-bold-duotone",
	});
}

export default Component;
