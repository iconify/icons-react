import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9ev1ybyr.css';
import '../../css/q/qwm5tjbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9ev1ybyr"/><path class="qwm5tjbfu"/>`,
		"fallback": "token:upp",
	});
}

export default Component;
