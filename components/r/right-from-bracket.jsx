import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0qvgxx5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0qvgxx5l"/>`,
		"fallback": "fa6-solid:right-from-bracket",
	});
}

export default Component;
