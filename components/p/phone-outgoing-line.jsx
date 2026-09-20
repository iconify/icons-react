import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsaax2ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsaax2ben"/>`,
		"fallback": "majesticons:phone-outgoing-line",
	});
}

export default Component;
