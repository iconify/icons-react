import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibbrz397t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibbrz397t"/>`,
		"fallback": "f7:videocam-circle-fill",
	});
}

export default Component;
