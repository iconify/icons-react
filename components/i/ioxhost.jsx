import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3wsjtbwi.css';

const viewBox = {"width":2048,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3wsjtbwi"/>`,
		"fallback": "fa:ioxhost",
	});
}

export default Component;
