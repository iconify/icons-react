import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt8f97bci.css';
import '../../css/x/xyx_nmb3x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt8f97bci"/><path class="xyx_nmb3x"/>`,
		"fallback": "energy-icons:pound-20-bold",
	});
}

export default Component;
