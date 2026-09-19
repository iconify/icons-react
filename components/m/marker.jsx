import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epcjm8b4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epcjm8b4s"/>`,
		"fallback": "fa-solid:marker",
	});
}

export default Component;
