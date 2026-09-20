import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p73hu3bar.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p73hu3bar"/>`,
		"fallback": "nrk:media-speed-1x",
	});
}

export default Component;
