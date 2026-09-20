import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg8x8bqpq.css';
import '../../css/l/l16jcdb4q.css';
import '../../css/e/efbiecbmk.css';
import '../../css/a/av3zbub9e.css';
import '../../css/o/oicd7acev.css';

const viewBox = {"width":567.24,"height":95.88};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg8x8bqpq"/><path class="l16jcdb4q"/><path class="efbiecbmk"/><path class="av3zbub9e"/><path class="oicd7acev"/>`,
		"fallback": "thesvg-color:sentinelone",
	});
}

export default Component;
