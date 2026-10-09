import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7aadjbad.css';
import '../../css/l/lthy19bnb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7aadjbad"/><path class="lthy19bnb"/>`,
		"fallback": "energy-icons:paw-20-bold",
	});
}

export default Component;
