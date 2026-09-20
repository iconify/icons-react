import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/why08ni4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="why08ni4h"/>`,
		"fallback": "ri:travesti-line",
	});
}

export default Component;
