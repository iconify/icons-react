import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy5740rad.css';
import '../../css/f/f34cgmbjb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy5740rad"/><path class="f34cgmbjb"/>`,
		"fallback": "energy-icons:oil-can-20-bold",
	});
}

export default Component;
