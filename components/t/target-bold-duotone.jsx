import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpv5vhdla.css';
import '../../css/r/rq9nj4b_b.css';
import '../../css/p/p1iyhdoir.css';
import '../../css/k/kb4z_3z1y.css';
import '../../css/l/lwuh2ntst.css';
import '../../css/y/y01l18b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpv5vhdla"/><path class="rq9nj4b_b"/><path class="p1iyhdoir"/><path class="kb4z_3z1y"/><path class="lwuh2ntst"/><path class="y01l18b7v"/>`,
		"fallback": "solar:target-bold-duotone",
	});
}

export default Component;
