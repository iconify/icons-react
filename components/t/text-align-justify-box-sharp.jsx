import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atrvdwwgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atrvdwwgi"/>`,
		"fallback": "pixelarticons:text-align-justify-box-sharp",
	});
}

export default Component;
