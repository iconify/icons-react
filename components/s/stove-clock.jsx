import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypnt1e9an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypnt1e9an"/>`,
		"fallback": "noviair-light:stove-clock",
	});
}

export default Component;
