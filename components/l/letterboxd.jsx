import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfcg8dg7l.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfcg8dg7l"/>`,
		"fallback": "fa6-brands:letterboxd",
	});
}

export default Component;
