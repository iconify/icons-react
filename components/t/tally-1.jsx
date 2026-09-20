import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/barz0mwnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="barz0mwnr"/>`,
		"fallback": "lucide:tally-1",
	});
}

export default Component;
