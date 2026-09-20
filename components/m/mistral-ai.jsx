import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrzndr38o.css';
import '../../css/w/wi_3t4bww.css';
import '../../css/h/hx0ghdc5i.css';
import '../../css/j/jy7s7pboj.css';
import '../../css/v/v66b5raoq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrzndr38o"/><path class="wi_3t4bww"/><path class="hx0ghdc5i"/><path class="jy7s7pboj"/><path class="v66b5raoq"/>`,
		"fallback": "selfhst:mistral-ai",
	});
}

export default Component;
