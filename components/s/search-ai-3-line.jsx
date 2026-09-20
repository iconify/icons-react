import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvnx24cwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvnx24cwq"/>`,
		"fallback": "ri:search-ai-3-line",
	});
}

export default Component;
