import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3lttot3l.css';
import '../../css/m/mf2faab1e.css';
import '../../css/i/igmy_9b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3lttot3l"/><path class="mf2faab1e"/><path class="igmy_9b_l"/>`,
		"fallback": "mingcute:more-3-line",
	});
}

export default Component;
