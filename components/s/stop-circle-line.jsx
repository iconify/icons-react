import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzsr9gn5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzsr9gn5l"/>`,
		"fallback": "ri:stop-circle-line",
	});
}

export default Component;
