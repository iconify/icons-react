import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopd9rgyc.css';

const viewBox = {"width":279.728,"height":95.711};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gopd9rgyc"/>`,
		"fallback": "thesvg-color:kroki",
	});
}

export default Component;
