import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj4vzjb5q.css';
import '../../css/v/vnif4gbyf.css';
import '../../css/a/ads4cuuck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj4vzjb5q"/><path class="vnif4gbyf"/><path class="ads4cuuck"/>`,
		"fallback": "energy-icons:water-treatment-20",
	});
}

export default Component;
