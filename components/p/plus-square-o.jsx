import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgoyxebgg.css';

const viewBox = {"width":1408,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgoyxebgg"/>`,
		"fallback": "fa:plus-square-o",
	});
}

export default Component;
