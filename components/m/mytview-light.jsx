import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzhc7cblt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzhc7cblt"/>`,
		"fallback": "selfhst:mytview-light",
	});
}

export default Component;
