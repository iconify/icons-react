import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5ol-sb4l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5ol-sb4l"/>`,
		"fallback": "energy-icons:rows-20-bold",
	});
}

export default Component;
