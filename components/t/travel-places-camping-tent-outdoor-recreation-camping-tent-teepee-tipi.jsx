import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsnwtgm1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsnwtgm1d"/>`,
		"fallback": "streamline:travel-places-camping-tent-outdoor-recreation-camping-tent-teepee-tipi",
	});
}

export default Component;
