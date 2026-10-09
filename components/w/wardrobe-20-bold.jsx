import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydzth1mww.css';
import '../../css/v/vf8m8ubqt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydzth1mww"/><path class="vf8m8ubqt"/>`,
		"fallback": "energy-icons:wardrobe-20-bold",
	});
}

export default Component;
