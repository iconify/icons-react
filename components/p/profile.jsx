import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x39s_of4y.css';

const viewBox = {"width":1408,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x39s_of4y"/>`,
		"fallback": "vs:profile",
	});
}

export default Component;
