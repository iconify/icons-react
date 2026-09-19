import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re2q06o0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re2q06o0k"/>`,
		"fallback": "cbi:sonoff-0p1",
	});
}

export default Component;
