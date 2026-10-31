import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc4s6ebod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc4s6ebod"/>`,
		"fallback": "coolicons:pencil-ruler-fill-round",
	});
}

export default Component;
