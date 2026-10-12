import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz29xlien.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz29xlien"/>`,
		"fallback": "energy-icons:metro-20-bold",
	});
}

export default Component;
