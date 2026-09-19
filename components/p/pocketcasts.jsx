import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfotg9b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfotg9b0k"/>`,
		"fallback": "cbi:pocketcasts",
	});
}

export default Component;
