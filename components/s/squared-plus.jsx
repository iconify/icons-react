import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tly8mhaex.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tly8mhaex"/>`,
		"fallback": "entypo:squared-plus",
	});
}

export default Component;
