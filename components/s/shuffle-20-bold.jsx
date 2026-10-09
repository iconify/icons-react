import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg5px6bdo.css';
import '../../css/u/ux46odduj.css';
import '../../css/y/yix08vbas.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg5px6bdo"/><path class="ux46odduj"/><path class="yix08vbas"/>`,
		"fallback": "energy-icons:shuffle-20-bold",
	});
}

export default Component;
