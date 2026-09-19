import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5cv9757k.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5cv9757k"/>`,
		"fallback": "fa-solid:train",
	});
}

export default Component;
