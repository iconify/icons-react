import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u42uzwbek.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u42uzwbek"/>`,
		"fallback": "fa:map-o",
	});
}

export default Component;
