import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m00v2ibis.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m00v2ibis"/>`,
		"fallback": "energy-icons:sparkle-20",
	});
}

export default Component;
