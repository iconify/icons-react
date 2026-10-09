import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9ogdpbce.css';
import '../../css/d/dhiwzmb1e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9ogdpbce"/><path class="dhiwzmb1e"/>`,
		"fallback": "energy-icons:nuclear-plant-20",
	});
}

export default Component;
