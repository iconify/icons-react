import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfg6phm1t.css';
import '../../css/i/isfz-28nj.css';
import '../../css/s/szjj1eb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfg6phm1t"/><path class="isfz-28nj"/><path class="szjj1eb9x"/>`,
		"fallback": "solar:stopwatch-play-bold-duotone",
	});
}

export default Component;
