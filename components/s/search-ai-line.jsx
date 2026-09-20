import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv1rs9bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv1rs9bcl"/>`,
		"fallback": "ri:search-ai-line",
	});
}

export default Component;
