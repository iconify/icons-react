import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur2lebcua.css';
import '../../css/y/y82qmibcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur2lebcua"/><path class="y82qmibcd"/>`,
		"fallback": "energy-icons:meter-cabinet-48-bold",
	});
}

export default Component;
