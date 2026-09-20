import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyaipvbmo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyaipvbmo"/>`,
		"fallback": "pinhead:tipi-campsite-with-rupee",
	});
}

export default Component;
