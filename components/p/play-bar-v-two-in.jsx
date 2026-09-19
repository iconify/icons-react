import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rucr588rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rucr588rq"/>`,
		"fallback": "cbi:play-bar-v-two-in",
	});
}

export default Component;
