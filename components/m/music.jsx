import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk4qabbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk4qabbfr"/>`,
		"fallback": "pixel:music",
	});
}

export default Component;
