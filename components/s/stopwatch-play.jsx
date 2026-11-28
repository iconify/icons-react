import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiw4awa1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiw4awa1t"/>`,
		"fallback": "noviair:stopwatch-play",
	});
}

export default Component;
