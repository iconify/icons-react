import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7by5acwu.css';
import '../../css/g/gzx58mb4y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7by5acwu"/><path class="gzx58mb4y"/>`,
		"fallback": "energy-icons:soldering-iron-20-bold",
	});
}

export default Component;
