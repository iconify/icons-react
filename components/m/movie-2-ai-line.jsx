import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm95ujemq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm95ujemq"/>`,
		"fallback": "ri:movie-2-ai-line",
	});
}

export default Component;
