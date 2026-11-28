import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifk8jzb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifk8jzb3t"/>`,
		"fallback": "noviair:watch",
	});
}

export default Component;
