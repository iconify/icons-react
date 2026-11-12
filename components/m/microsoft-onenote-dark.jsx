import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc4rf65pq.css';
import '../../css/d/diki2ffvo.css';
import '../../css/j/ji-kiybzk.css';
import '../../css/y/yaqxqdbps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc4rf65pq"/><path class="diki2ffvo"/><path class="ji-kiybzk"/><path class="yaqxqdbps"/>`,
		"fallback": "selfhst:microsoft-onenote-dark",
	});
}

export default Component;
